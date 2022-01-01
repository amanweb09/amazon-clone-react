const mongoose = require('mongoose');
const Users = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signinController = () => {
    return {
        async issueEmailToken(req, res) {
            const email_tel = req.body.email_tel;

            if (!email_tel) {
                return res.status(422).json({ err: 'Please enter your email or telephone number' })
            }
            else {
                try {
                    const user = await Users.findOne({ $or: [{ email: email_tel }, { tel: email_tel }] });

                    if (user) {
                        const emailToken = jwt.sign({ _id: user._id }, process.env.EMAIL_TOKEN_SECRET, {
                            expiresIn: '1d'
                        })

                        if (emailToken) {
                            user.emailToken = emailToken;
                            await user.save((err, data) => {
                                if (err) {
                                    return res.status(500).json({ err: 'Internal Server Error' })
                                }
                                if (data) {
                                    return res.status(200).json({ success: 'user found', emailToken })
                                }
                            })
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
        },
        async issueAccessToken(req, res) {
            const { password, etCookie } = req.body;

            if (!password || !etCookie) {
                return res.status(422).json({ err: 'Please fill in your password' })
            }
            else {
                const verifyToken = jwt.verify(etCookie, process.env.EMAIL_TOKEN_SECRET);

                if (verifyToken) {
                    try {
                        const user = await Users.findOne({ emailToken: etCookie });

                        if (user) {
                            try {
                                const verPwd = await bcrypt.compare(req.body.password, user.password)
                                if (verPwd === false) {
                                    return res.status(401).json({ err: 'Invalid credentials' })

                                }
                                if (verPwd === true) {
                                    const accessToken = jwt.sign({ _id: user._id }, PROCESS.ENV.ACCESS_TOKEN_SECRET, {
                                        expiresIn: '2d'
                                    })

                                    if (accessToken) {
                                        user.accessToken.unshift(accessToken);
                                        return res.status(200).json({ success: 'access granted', accessToken })
                                    }
                                    else {
                                        return res.status(500).json({ err: 'Internal Server Error' })
                                    }

                                }
                            } catch {
                                er => {
                                    console.log(er);
                                    return res.status(500).json({ err: 'Internal Server Error' })
                                }
                            }

                        }
                    } catch {
                        err => {
                            console.log(err);
                            return res.status(500).json({ err: 'Internal Server Error' })
                        }
                    }
                }
                else {
                    return res.status(422).json({ err: 'Tampered URL. Please try again' })
                }
            }
        }
    }
}

module.exports = signinController;