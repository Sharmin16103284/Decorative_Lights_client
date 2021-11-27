import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import './Bookings.css'

const Bookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://floating-hollows-88352.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []) 
    return (
        <div className=" container mb-5">

            <div className="row justify-content-center title">
                <h1>Our Products</h1>
                {
                    bookings.filter((item, index) => index < 6).map((booking => <Booking key={booking.id} service={booking}></Booking>))
                    // bookings.map(booking => <Booking key={booking.id} service={booking}></Booking>)
                }
            </div>

        </div>
    );
};

export default Bookings;