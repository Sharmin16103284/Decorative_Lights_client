import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css'

const Booking = (props) => {
    const { _id, id, name, description, image, price } = props.service
    return (
        <div className=" col-md-6 col-lg-3 col-sm-12 service justify-content-center">

            <Card style={{ width: '100%' }} className="fullcard" >
                <Card.Img className="card-img" variant="top" src={image} />
                <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <span id="description">
                            <small>{description}</small>
                        </span>
                        <br />
                        <br /> 
                        <p>Price: $<b>{price}</b></p><br />
                        <Link to={`/userBooking/${_id}`} className="detailsLink center">
                            <button className="btn text-light " style={{ backgroundColor: "#ff86a2" }}>Place Your Order</button>
                        </Link>
                    </Card.Text>
                </Card.Body>

            </Card>

        </div>
    );
};

export default Booking;