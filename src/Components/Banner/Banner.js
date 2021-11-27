import React from 'react';
import './Banner.css'

const Banner = () => {
  return (

    <div>

      <main style={{ height: '600px', paddingLeft: '5%' }} className="row d-flex align-items-center w-100">
        
          <div className="col-md-12 col-lg-7">
            <img src="https://images.unsplash.com/photo-1549216011-894fb68ef744?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" className="img-fluid w-100" />
          </div>
          <div className="col-md-12 col-lg-4 mb-4 text-dark bannerText">
            <div className="w-100 ">
              <p className="fw-bold" style={{ color: "#fd90aa", fontSize: "30px" }}>DECORATE YOUR PLACE</p>
              <p className='text-secondary' style={{ textAlign: "justify", fontWeight: "200px" }}>You can make your home look elaborate with decorative lights & lamps. From wall lamps to light fixtures, you can find a variety of lamp shades and lights.</p>

              <button style={{ backgroundColor: '#fd90aa', fontSize: '1.2em' }} className="btn text-center text-light">Buy Now</button>
            </div>
          </div>
        
      </main>
    </div>
  );
};

export default Banner;