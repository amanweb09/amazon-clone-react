const mongoose = require('mongoose');
const Users = require('../models/User');
const jwt = require('jsonwebtoken');

const signinController = () => {
    return {
        async issueAccess(req, res) {
            const email_tel = req.body.email_tel;

            if (!email_tel) {
                return res.status(422).json({ err: 'Please enter your email or telephone number' })
            }
            else {
                try {
                    const user = await Users.findOne({ $or: [{ email: email_tel }, { tel: email_tel }] });

                    if (user) {
                        const emailToken = jwt.sign({ _id: user._id }, 'iwafiwhfiwhfifnhwiwifhifdjjdjdj', {
                            expiresIn: '2d'
                        })
                        // console.log('user: ', user);
                        // console.log('token: ', emailToken);

                        if (emailToken) {
                            user.emailToken = emailToken;
                            return res.status(200).json({ success: 'user found', emailToken })
                        }
                    }
                    else {
                        return res.status(404).json({ err: 'No user exists with this email/telephone number' })
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