import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import registerImage from '../../../images/register.png';
import './Register.css';

import { register } from '../../../store/actions/authAction';

const Register = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth); 
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(user));
        setUser({
            email: "",
            password: ""
        })
    }

    if(auth.id) return <Redirect to="/" />

    return (
        <div className="container register">
            <div className="row">
                <div className="col-6 register_content">
                    <section className="flex form-section flex-column">
                        <h1 className="form-header">Registration</h1>
                        
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Email" 
                                    className="form-input" 
                                    value= { user.email }
                                    onChange= {(e) => setUser({ ...user, email: e.target.value })}
                                />
                            </div>
                            <div className="row">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    className="form-input"
                                    value= { user.password }
                                    onChange= {(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn btn-submit">Register</button>
                        </form>
                    </section>
                </div>
                <div className="col-6 register_banner">
                    <img src={registerImage} alt="register" />
                </div>
            </div>
        </div>
    )
}

export default Register;
