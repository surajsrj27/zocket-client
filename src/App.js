import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/NavBar/Navbar';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { loadUser } from "./store/actions/authAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/user/:userId" component={User} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </div>
                <ToastContainer />
                <hr />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;