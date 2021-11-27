import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
 
const Login = (props) => {
    let { loginWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/";
    const { loginEmailPassword, catchEmail, catchPassword, error } = useFirebase();

    // const [loginData, setLoginData] = useState({})


    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect);
            })
    }

    const handleLogin = () => {
        loginEmailPassword()
            .then(result => {
                history.push(redirect);
            })
    }


    return (

        <div className=" container">
            <div className="row align-items-center" style={{ height: "80vh" }}>
                <h1 className="text-center">Sign In</h1>
                <div className="col-md-12 shadow p-5">

                    <form onSubmit={loginEmailPassword}>

                        
                        <div className="form-group">
                            <input onBlur={catchEmail} type="email" placeholder="Your Email Address" className="form-control" />
                        </div>

                        <br />

                        <div className="form-group">
                            <input onBlur={catchPassword} type="password" placeholder="Password" className="form-control" />
                        </div>

                        <div className="from-group mt-5 ">
                            <input className="btn" type="submit" value="Sign In" style={{ marginRight: '5px', backgroundColor: '#ff86a2', color: 'white' }} />

                            {/* <button onClick={handleLogin} className="btn mt-2 "  style={{ backgroundColor: '#ff86a2', color: 'white' }}>Login</button> */}
                            
                        </div>

                        <div className="text-bg-danger">{error}</div>

                    </form>
                    <Link to="/registration" style={{textDecoration:'none'}}>
                        <p style={{textTransform:'uppercase', marginTop:"10px"}}>Don't have any account? Sign Up here.</p>
                    </Link>

                    <button onClick={handleGoogleLogin} className="btn mt-2 " style={{ backgroundColor: '#ff86a2', color: 'white' }}>Login With Google</button>

                </div>
            </div>

        </div>


    );
};

export default Login;
