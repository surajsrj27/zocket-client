import React from 'react'
import home from '../../images/notfound.png';
import './NotFound.css';
import { toast } from "react-toastify";

const NotFound = () => {
    return (
        <div className="container notfound">
            <div className="row">
                <div className="col-12 notfound-content">
                    <h1>Page Not Found</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
