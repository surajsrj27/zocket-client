import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userImage from '../../images/user.png';
import './User.css';
import { Link } from 'react-router-dom';
import { user } from '../../store/actions/userAction';

const User = ({ match }) => {
    console.log(match.params.userId);
    const dispatch = useDispatch();
    const usr = useSelector(state => state.user); 
    console.log("usr:",usr);
    // dispatch(user(match.params.userId));
    useEffect(() => {
        dispatch(user(match.params.userId));
        console.log("effects");
    }, [dispatch, match]);

    return (
        <div className="container user">
            <div className="row">
                <div className="col-6 user_content">
                    <h3>Your Email Address:</h3>
                    <h1>{usr.email}</h1>
                    <Link 
                            to={{ pathname:`/`  }} 
                            className="btn btn-submit home-btn"
                        > Go Back 
                        </Link>
                </div>
                <div className="col-6 user_banner">
                    <img src={userImage} alt="user" />
                </div>
            </div>
        </div>
    )
}

export default User;
