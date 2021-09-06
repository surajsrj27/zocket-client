import React from 'react'
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-leftside">
                <div className="footer-image">
                    <div className="footer-nav-logo">
                        <img src={logo} alt="logo" className="footer-logo" />
                    </div>
                </div>
            </div>
            <div className="footer-rightside">
                <h4>Copyright <i className="far fa-copyright"></i> 2021 Zocket. All rights reserved.</h4>
            </div>
        </div>
    )
}

export default Footer;
