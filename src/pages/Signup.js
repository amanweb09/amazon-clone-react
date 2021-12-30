import React from 'react';
import { NavLink } from 'react-router-dom'
import '../css/Signup.css';

const Signup = () => {
    return (
        <div className='signup'>
            <div className="signup_logo flex">
                <img
                    src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
                    alt="amazon salary png logo vector"
                />
                <span>.in</span>
            </div>

            <form action="#" method='POST'>
                <span className='signup_form_heading'>Create Account</span>
                <label htmlFor="name">Your name</label>
                <input type="text" name='name' />

                <label htmlFor="tel">Mobile number</label>
                <div className="signup_tel flex-center">
                    <select name="country-code" id="">
                        <option value="in">IN +91</option>
                        <option value="in">IN +91</option>
                        <option value="in">IN +91</option>
                        <option value="in">IN +91</option>
                        <option value="in">IN +91</option>
                    </select>
                    <input type="tel" name="tel" id="" />
                </div>

                <label htmlFor="email">Email (optional)</label>
                <input type="email" name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='At least 6 characters' />

                <span className='flex signup_password_notice'><i class="fas fa-info"></i> Passwords must be at least 6 characters.</span>

                <p className='signup_verify'>We will send you a text to verify your phone. <br/> Message and Data rates may apply.</p>

                <button>Continue</button>

                <hr />

                <div className='flex-center signup_links'>
                    <p>Already have an account? <NavLink to='/'>Sign in</NavLink> </p>
                </div>

                <div className='flex-center signup_links'>
                    <p>Buying for work? <NavLink to='/'>Create a free business account</NavLink> </p>
                </div>
            </form>
        </div>
    )
}

export default Signup;