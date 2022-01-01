const mongoose = require('mongoose');
const Users = require('../models/User');
const jwt = require('jsonwebtoken');

const signinController = () => {
    return {
        async issueAccess(req, res) {
            const email_tel = req.body.email_tel;

            if (!email_tel) {
                return res.status(403).json({ err: 'Please enter your email or telephone number' })
            }
            else {
                try {
                    const user = await Users.findOne({ $or: [{ email: email_tel }, { tel: email_tel }] });

                    if (user) {
                        const token = await jwt.sign({ _id: user._id }, 'iwafiwhfiwhfifnhwiwifhifdjjdjdj', {
                            expiresIn: '2d'
                        })

                        if (token) {
                            user.accessToken.unshift(token);
                            return res.status(200).json({ success: 'Login Successful!', token })
                        }
                    }
                } catch {
                    err => {
                        console.log(err);
                        return res.status(500).json({ err: 'Internal Server Error' })
                    }
                }
            }
        }
    }
}

module.exports = signinController;