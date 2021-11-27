import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = (props) => {
  const { user, logout } = useAuth();
  // console.log(user);

  return (

    <div className="topMenu">

      <div className="container-fluid menu ">
        <nav className="navbar navbar-expand-lg navbar-light menubar">
          <div className="container-fluid">
            <div className="logo items col-lg-3">
              <Link to="/" className="items mt-0">
                <h2>DecoreLights</h2>
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto col-lg-10">

                <Link to="/" className="items">Home</Link>
                <Link to="/exploreMore" className="items">Explore More</Link>
                <Link to="/about" className="items">About</Link>
                 {user.email ?
                  <Link to="/dashboard" className="items">My Dashboard</Link> : ''}
                {/*{user.email ?
                  <Link to="/myorder" className="items">My Orders</Link> : ''}
                {user.email ?
                  <Link to="/review" className="items">Review</Link> : ''}
                {user.email ?
                  <Link to="/manageAllOrder" className="items">Manage All Orders</Link> : ''} 
                {user.email ?
                  <Link to="/addNewService" className="items">Add New Product</Link> : ''}
                {user.email ?
                  <Link to="/manageService" className="items">Manage All Products</Link> : ''} */}
                {!user.email ?
                  <Link to="/login" className="items">Login</Link> :
                  <Link to="/login" className="items text-light" onClick={logout}>Logout</Link>
                }
                {user.email ? <p className="text-light items" style={{ fontWeight: 'bold' }}>{user.displayName}</p> : <p></p>}

              </div>
            </div>
          </div>
        </nav>
      </div>

    </div>


  );
};

export default Header;