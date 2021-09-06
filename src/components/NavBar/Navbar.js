import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
import './Navbar.css'
import logo from '../../images/logo.png';

import { logout } from '../../store/actions/authAction';

const Navbar = () => {
    // const state = useSelector(state => state);
    // console.log(state);
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout());
        // history.push("/login");
        if(!auth.id) return <Redirect to="/login" />
    }

    return (
        <div className="NavBar">
            <div className="leftside">
                <div className="brand-image">
                    <NavLink to="/" className="nav-logo">
                        <img src={logo} alt="logo" className="logo" />
                    </NavLink>
                </div>
            </div>
            <div className="rightside">
                <nav className="nav">
                    <ul>
                        {auth.id ? (
                            <li>
                                <NavLink to="/#" onClick={() => handleLogOut()}>Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li> 
                            </>  
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
