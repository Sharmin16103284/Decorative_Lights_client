import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';

const CreateAdmin = () => {

    const [email , setEmail] = useState('');
    const [success , setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://floating-hollows-88352.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
                alert('Made Admin Successfylly/');
                setEmail('');
            }

        })
        e.preventDefault();
    }        


    return (
        <div>
            <Dashboard></Dashboard>
            <div className=" container">
                <div className="row align-items-center" style={{ height: "80vh" }}>
                    <h1 className="text-center m-0" style={{ color: '#ff86a2' }}>Create An Admin</h1>
                    <div className="col-md-12 shadow p-5">
                        
                        <form onSubmit={handleAdminSubmit}>
{/* 
                            <div className="mb-3">
                                <input type="name" onBlur={catchName} className="form-control" id="displayName" name="name" placeholder="Your name address" required></input>
                            </div> */}

                            <div className="mb-3">
                                <input type="email" onBlur={handleOnBlur} className="form-control" id="email" name="email" placeholder="Your email address" required></input>
                            </div>

                            {/* <div className="mb-3">
                                <input type="password" placeholder="password" onBlur={catchPassword} className="form-control" id="password" name="password" required></input>
                            </div> */}

                            <input type="submit" value="Create Admin" className="btn" style={{ backgroundColor: '#ff86a2', color: 'white' }} />

                            
                        </form>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateAdmin;