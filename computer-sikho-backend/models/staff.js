const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const staffSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    picVersion: { type: String, default: '1531305955' },
    picId: { type: String, default: 'default.png' },
    city: { type: String, default: '' },
    country: { type: String, default: '' },
    role: { type: Number, default: 1},
    timeStamp: { type: String}
});

staffSchema.statics.EncryptPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

module.exports = mongoose.model('Staff', staffSchema);
