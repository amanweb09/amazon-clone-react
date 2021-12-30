import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/Signup.css';

const Signup = () => {
    const [countryCodes, setCountryCodes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("https://www.universal-tutorial.com/api/countries/", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhbWFua2hhbm5hMjI0NDY2QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlcwczZwX0dzYmRjNF9yUGhwamdoRVp1TGNKX0kyZW1RVk53a3RBcmdwTDJ0QXA5VEVPMXZqZVZqbi0yNzduSVprTWsifSwiZXhwIjoxNjQwOTU5ODk1fQ.D6jhzR7chgHgTbQVvZ1r4445ERtNNoGxgdXjCBdGwwk",
                "Accept": "application/json"
            }
        })
            .then((resp) => {
                setCountryCodes(resp.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const redirectToHome = () => {
        navigate('/')
    }

    return (
        <div className='signup'>
            <div className="signup_logo flex">

                <img
                    onClick={() => { redirectToHome() }}
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
                    <select name="signup_country_code" id="">
                        {
                            countryCodes.map((code) => {
                                return <option value={code.country_phone_code}>{code.country_short_name} {code.country_phone_code}</option>
                            })
                        }
                    </select>
                    <input type="tel" name="tel" id="" />
                </div>

                <label htmlFor="email">Email (optional)</label>
                <input type="email" name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='At least 6 characters' />

                <span className='flex signup_password_notice'><i className="fas fa-info"></i> Passwords must be at least 6 characters.</span>

                <p className='signup_verify'>We will send you a text to verify your phone. <br /> Message and Data rates may apply.</p>

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