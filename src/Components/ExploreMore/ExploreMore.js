import React, { useEffect, useState } from 'react';
import ExploreMoreSingle from '../ExploreMoreSingle/ExploreMoreSingle';
import './ExploreMore.css'


const ExploreMore = () => {

    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://floating-hollows-88352.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []) 

    
    return (

        <div className=" container mb-5">

            <div className="row justify-content-center title">
                <h1>Our All Products</h1>
                {
                    bookings.map(booking => <ExploreMoreSingle key={booking.id} service={booking}></ExploreMoreSingle>)
                }
            </div>

        </div>

    );
};

export default ExploreMore;