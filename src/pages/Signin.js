import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import '../css/Signin.css'
import axios from 'axios'

const Signin = () => {

    const [email_tel, setEmail_tel] = useState('');
    const navigate = useNavigate();


    const sendSigninData = (e) => {
        e.preventDefault();

        axios.post('/signin', { email_tel })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
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

            <form action="#" method='POST'>
                <span className='signin_form_heading'>Sign-in</span>

                <label htmlFor="email_tel">Email or mobile phone number</label>
                <input value={email_tel} type="text" name='email_tel' onChange={(e) => { setEmail_tel(e.target.value) }} />

                <button type='submit' onClick={(e) => { sendSigninData(e) }}>Continue</button>

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
