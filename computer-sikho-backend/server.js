const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const _ = require('lodash');

const dbConfig = require('./config/config');
const auth = require('./routes/authRoutes');


const app = express();

app.use(cors());

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());


// DB Connection
//mongoose.Promise = global.Promise;
mongoose.connect(
    dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }
);

// Routes
app.use('/api/cs', auth);

const server = require('http').createServer(app);

server.listen(3000, () => {
    console.log("Application started at port 3000");
});