import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import '../css/Signin.css'
import axios from 'axios'
import Cookies from 'universal-cookie'
import ErrMessage from '../components/ErrMessage'
import SuccessMessage from '../components/SuccessMessage'

const Signin = () => {

    const [email_tel, setEmail_tel] = useState('');
    const [isFail, setIsFail] = useState(false)
    const [respText, setRespText] = useState('')
    const [showPassowrdScreen, setShowPassowrdScreen] = useState(false)
    const [password, setPassword] = useState('')
    // const [showEmailScreen, setShowEmailScreen] = useState(true)

    const navigate = useNavigate();

    const cookies = new Cookies();

    const sendSigninData = (e) => {
        e.preventDefault();

        axios.post('/signin', { email_tel })
            .then((res) => {
                console.log(res);
                const emailToken = res.data.emailToken;
                cookies.set('et', emailToken);

                setIsFail(false)
                setShowPassowrdScreen(true)
                // setShowEmailScreen(false)
            })
            .catch((err) => {
                switch (err.response.status) {
                    case 422:
                        setRespText('Please fill all the fields.')
                        break;
                    case 500:
                        setRespText('Internal Server Error')
                        break;
                    case 404:
                        setRespText('No user exists with this email/telephone number')
                    default:
                        break;
                }

                setIsFail(true)
            })
    }

    const sendPassword = (e) => {
        console.log('abc');
    }
    return (
        <div className='signin'>
            <div className="signin_logo flex">
                <img
                    onClick={() => navigate('/')}
                    src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
                    alt="amazon salary png logo vector"
                />
                <span>.in</span>
            </div>

            {
                isFail ? <ErrMessage message={respText} /> : ''
            }


            <form action="#" method='POST'>
                <span className='signin_form_heading'>Sign-in</span>
                {
                    !showPassowrdScreen ?
                        <>
                            <label htmlFor="email_tel">Email or mobile phone number</label>
                            <input value={email_tel} type="text" name='email_tel' onChange={(e) => { setEmail_tel(e.target.value) }} />

                            <button type='submit' onClick={(e) => { sendSigninData(e) }}>Continue</button>
                        </>
                        :
                        <>
                            <label htmlFor="email_tel">Password</label>
                            <input value={password} type="text" name='email_tel' onChange={(e) => { setPassword(e.target.value) }} />

                            <button type='submit' onClick={(e) => { sendPassword(e) }}>Continue</button>
                        </>
                }

                <p className='signup_form_links_p'>
                    <small className='signup_form_links'>By continuing, you agree to Amazon's &nbsp;
                        <NavLink to='/'>Conditions of Use</NavLink>
                        and &nbsp;
                        <NavLink to='/'>Privacy Notice</NavLink>
                        .

                    </small>
                </p>

                <p className='need_help'>
                    <NavLink to='/'>Need help?</NavLink>
                </p>
            </form>

            <div className="new_acc">
                <p>New to Amazon?</p>
                <button className="create_acc_btn">Create your Amazon account</button>
            </div>

            <hr />

            <div className="footer_links flex">
                <NavLink to='/'>Conditions of Use</NavLink>
                <NavLink to='/'>Privacy Notice</NavLink>
                <NavLink to='/'>Help</NavLink>
            </div>

            <p className='footer-copy'>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}

export default Signin
