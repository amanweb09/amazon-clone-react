const mongoose = require('mongoose');

const dbConnection = async() => {
    const dbURL = 'mongodb://localhost:27017/amazon-clone'
    try {
        const conn = await mongoose.connect(dbURL);

        if(conn) {
            console.log('db connected ...');
        }
    } catch {
        err => {
            console.log(err);
        }
    }
}

module.exports = dbConnection;