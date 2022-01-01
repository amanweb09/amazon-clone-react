const mongoose = require('mongoose');

const dbConnection = async() => {
    const dbURL = process.env.DBCONNURL;
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