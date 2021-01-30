const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Staff = require('../models/staff');
const Utils = require('../helpers/utils');
const dbConfig = require('../config/config');


module.exports = {
    async CreateStaff(req, res) {
        const schema = Joi.object().keys({
            firstName: Joi.string()
                .min(3)
                .max(20)
                .required(),
            lastName: Joi.string()
                .min(3)
                .max(20)
                .required(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .min(5)
                .max(15)
                .required(),
            role: Joi.number()
                .min(1)
                .max(3)
                .required()
        });

        const { error, value } = Joi.validate(req.body, schema);

        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({ msg: error.details })
        }

        const staffEmail = await Staff.findOne({
            email: Utils.lowerCase(req.body.email)
        });

        if (staffEmail) {
            return res
                .status(HttpStatus.CONFLICT)
                .json({ message: 'Email already exist' });
        }

        return bcrypt.hash(value.password, 10, (err, hash) => {
            if (err) {
                return res
                    .status(HttpStatus.BAD_REQUEST)
                    .json({ message: 'Error hashing password' });
            }

            const body = {
                firstName: Utils.firstUpper(value.firstName),
                lastName: Utils.firstUpper(value.lastName),
                email: Utils.lowerCase(value.email),
                password: hash,
                role: req.body.role,
                timeStamp: Date.now()
            };

            Staff.create(body)
                .then(staff => {
                    //console.log(staff);
                    const token = jwt.sign({ data: staff }, dbConfig.secret, {
                        expiresIn: '5h'
                    });

                    res.cookie('auth', token);

                    res.status(HttpStatus.CREATED)
                        .json({ message: 'Staff user created successfully', staff, token });
                })
                .catch(err => {
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .json({ message: 'Error occurred' });
                });
        });
    },

    async LoginStaff(req, res) {
        if (!req.body.email || !req.body.password) {
            return res
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json({ message: 'No empty fields allowed' });
        }

        await Staff.findOne({ email: Utils.lowerCase(req.body.email) }, (err, staff) => {
            if (!staff) {
                return res
                    .status(HttpStatus.NOT_FOUND)
                    .json({ message: 'Email Id not registered..!!' });
            }

            if (err) {
                return res
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({ message: 'Internal Server Error occurred' });
            }

            return bcrypt.compare(req.body.password, staff.password).then(result => {
                if (!result) {
                    return res
                        .status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .json({ message: 'Password does not match' });
                }

                const token = jwt.sign({ data: staff }, dbConfig.secret, {
                    expiresIn: '5h'
                });

                res.cookie('auth', token);
                
                return res
                    .status(HttpStatus.OK)
                    .json({ message: 'Login successful', staff, token });
            });
        });
    }
};
