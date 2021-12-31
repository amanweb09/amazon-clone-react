const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Users = require('../models/User');

const signupController = () => {
    return {
        async store(req, res) {
            const { name, email, cc, tel, password } = JSON.parse(req.body.authObject);

            if (!name || !email || !tel || !password) {
                return res.status(422).json({ err: 'Please fill all the fields!' })
            }
            else {
                try {
                    const existingUser = await Users.findOne({ $or: [{ email }, { tel }] })

                    if (existingUser) {
                        return res.status(403).json({ err: 'User already exists with this email' });
                    }
                    else {
                        const hash = bcrypt.hash(password, 10, async (err, hash) => {
                            if (hash) {
                                const user = new Users({
                                    name, email, cc, tel, password: hash
                                })

                                await user.save((er, data) => {

                                    if (data) {
                                        return res.status(201).json({ success: 'Signup Successful! Please Login' })
                                    }
                                    if (er) {
                                        return res.status(500).json({ err: 'Something went wrong!' })
                                    }
                                });

                            }
                            if (err) {
                                console.log(err);
                                return res.status(500).json({ err: 'Something went wrong!' })
                            }

                        })

                    }
                } catch {
                    err => {
                        console.log(err);
                        return res.status(500).json({ err: 'Something went wrong!' })
                    }
                }
            }
        }
    }
}

module.exports = signupController;