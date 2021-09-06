import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../../store/actions/authAction';

import loginImage from '../../../images/login.png';
import './Login.css';

const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login(creds));
        setCreds({
            email: "",
            password: ""
        });
    };

    if(auth.id) return <Redirect to="/" />

    return (
        <div className="container login">
            <div className="row">
                <div className="col-6 login_content">
                    <section className="flex form-section flex-column">
                        <h1 className="form-header">Login</h1>

                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Email" 
                                    className="form-input" 
                                    value={creds.email}
                                    onChange={(e) => setCreds({...creds, email: e.target.value})}
                                />
                            </div>
                            <div className="row">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="form-input"
                                    value={creds.password}
                                    onChange={(e) => setCreds({...creds, password: e.target.value})} 
                                />
                            </div>
                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                        <p className="testing">Email Address for testing:</p>
                        <p className="testing">Email: testingmytask2@gmail.com</p>
                        <p className="testing">Password: testingmytask@123</p>
                    </section>
                </div>
                <div className="col-6 login_banner">
                    <img src={loginImage} alt="login" />
                </div>
            </div>
        </div>
    )
}

export default Login;
