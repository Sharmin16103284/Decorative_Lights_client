import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import DashboardHome from './DashboardHome';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Dashboard.css'

const Dashboard = () => {

    const { user, admin } = useAuth();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>
            <div className="col-md-3 col-lg-3 dashboardMenu">
                <button className="btn mt-5 " style={{ backgroundColor: '#ff86a2', color: 'white' }} onClick={handleShow}>
                    Click Here To Open Menu
                </button>
            </div>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="sidebar">
                        <li className="sideItem">
                            <Link to="/dashboard" className="items">My Dashboard</Link>
                        </li>
                        {user.email && !admin ?
                        <li className="sideItem">
                            
                                <Link to="/myorder" className="items">My Orders</Link>
                        </li> : ''}

                        {user.email && !admin ?
                        <li className="sideItem">
                                <Link to="/review" className="items">Write A Review</Link>
                        </li> : ''}

                        {user.email && !admin ?
                        <li className="sideItem">
                                <Link to="/payment" className="items">Payment Details</Link>
                        </li> : ''}
                        
                        {admin ?
                            <li className="sideItem">
                                <Link to="/createAdmin" className="items">Create New Admin</Link>
                            </li> : ''}
                            
                        {admin ?
                        <li className="sideItem">
                            <Link to="/addNewService" className="items">Add New Product</Link>
                        </li> : ''}

                        {admin ?
                        <li className="sideItem">
                            <Link to="/manageService" className="items">Manage All Products</Link>
                        </li> : ''}

                        {admin ?
                        <li className="sideItem">
                            <Link to="/manageAllOrder" className="items">Manage All Orders</Link>
                        </li> : ''}

                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <div className="col-md-12 col-lg-12 ">
                <DashboardHome></DashboardHome>
            </div> */}
        </div>

        // <main style={{ height: '600px', backgroundColor: "red" }} className="row d-flex align-items-center w-100">

        //     <div className="col-md-12 col-lg-3">
        //         <div></div>
        //     </div>
        //     <div className="col-md-12 col-lg-6 text-dark bannerText">
        //         <DashboardHome></DashboardHome>
        //     </div>

        // </main>
    );
};

export default Dashboard;