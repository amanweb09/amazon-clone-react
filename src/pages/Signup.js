import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../css/Signup.css';
import ErrMessage from '../components/ErrMessage';
import SuccessMessage from '../components/SuccessMessage';

const Signup = () => {
    const [countryCodes, setCountryCodes] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [cc, setCc] = useState('');
    const [password, setPassword] = useState('');

    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isFail, setIsFail] = useState(false);
    const [respText, setRespText] = useState('');


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

    const createAuthObject = (e) => {
        e.preventDefault();

        const authObject = {
            name, cc, tel, email, password
        }

        axios.post('/signup', { authObject: JSON.stringify(authObject) })
            .then((res) => {
                if (res.status === 201) {
                    setIsFail(false);
                    setIsSuccessful(true);

                    setTimeout(() => {
                        navigate('/')
                    }, 1500)
                }
            })
            .catch((err) => {
                setIsSuccessful(false);
                setIsFail(true);

                const status = err.response.status;

                switch (status) {
                    case 422:
                        setRespText('Please fill all the fields')
                        break;
                    case 500:
                        setRespText('Internal Server Error')
                        break;
                    case 403:
                        setRespText('User already exists with this email/telephone')
                    default:
                        break;
                }
            })
    }

    return (
        <div className='signup'>
            <div className="signup_logo flex">

                <img
                    onClick={() => navigate('/')}
                    src="https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
                    alt="amazon salary png logo vector"
                />
                <span>.in</span>
            </div>
            {
                isSuccessful ? <SuccessMessage /> : ""
            }
            {
                isFail ? <ErrMessage message={respText} /> : ""
            }

            <form action="#" method='POST'>
                <span className='signup_form_heading'>Create Account</span>
                <label htmlFor="name">Your name</label>
                <input defaultChecked={true} value={name} type="text" name='name' onChange={(e) => { setName(e.target.value) }} />

                <label htmlFor="tel">Mobile number</label>
                <div className="signup_tel flex-center">
                    <select value={cc} name="signup_country_code" id="" onChange={(e) => { setCc(e.target.value) }}>
                        {
                            countryCodes.map((code) => {
                                return <option key={Math.round(Math.random() * 1E9)} value={code.country_phone_code}>{code.country_short_name} {code.country_phone_code}</option>
                            })
                        }
                    </select>
                    <input value={tel} type="tel" name="tel" id="" onChange={(e) => { setTel(e.target.value) }} />
                </div>

                <label htmlFor="email">Email (optional)</label>
                <input value={email} type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="password">Password</label>
                <input value={password} type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='At least 6 characters' />

                <span className='flex signup_password_notice'><i className="fas fa-info"></i> Passwords must be at least 6 characters.</span>

                <p className='signup_verify'>We will send you a text to verify your phone. <br /> Message and Data rates may apply.</p>

                <button onClick={(e) => { createAuthObject(e) }}>Continue</button>

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