import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Registration = () => {

    const { emailpassReg, catchEmail, catchPassword, catchName, error } = useFirebase();


    return (
        <div>
            <div className=" container my-5">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <h1 className="text-center" style={{ color: '#ff86a2' }}>Sign Up</h1>
                    <div className="col-md-12 shadow p-5">
                        <h4 className="mb-3" style={{ color: '#C1C0C0' }}>Provide Your Registration Information</h4>
                        <form onSubmit={emailpassReg}>

                            <div className="mb-3">
                                <input type="name" onBlur={catchName} className="form-control" id="displayName" name="name" placeholder="Your name address" required></input>
                            </div>

                            <div className="mb-3">
                                <input type="email" onBlur={catchEmail} className="form-control" id="email" name="email" placeholder="Your email address" required></input>
                            </div>

                            <div className="mb-3">
                                <input type="password" placeholder="password" onBlur={catchPassword} className="form-control" id="password" name="password" required></input>
                            </div>

                            <input type="submit" value="Sign Up" className="btn" style={{ backgroundColor: '#ff86a2', color: 'white' }} />

                            <Link to="/login" style={{textDecoration:'none'}}>
                                <p style={{textTransform:'uppercase', marginTop:"10px"}}>Already Signed Up? Sign In Here.</p>
                            </Link>

                            <div className="text-danger">{error}</div>
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;
