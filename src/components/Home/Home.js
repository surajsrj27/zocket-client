import React from 'react'
import home from '../../images/home.png';
import './Home.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const auth = useSelector(state => state.auth);
    return (
        <div className="container home">
            <div className="row">
                <div className="col-6 home_content">
                    <h1>Welcome To Zocket.</h1>
                    {auth.id && 
                        <Link 
                            to={{ pathname:`/user/${auth.id}`  }} 
                            className="btn btn-submit home-btn"
                        > Get Your Email Address
                        </Link>
                    }
                    
                </div>
                <div className="col-6 home_banner">
                    <img src={home} alt="home" />
                </div>
            </div>
        </div>
    )
}

export default Home;
