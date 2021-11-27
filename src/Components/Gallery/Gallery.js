import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Gallery.css'

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('https://floating-hollows-88352.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, []);
    return (
        <div className="row text-center justify-content-center my-5">
            <h1 className="title">Gallery</h1>
            {gallery.map((galleries, index) => (
                <div className="col-md-6 col-lg-3 col-sm-12 service justify-content-center ">

                    <Card style={{ width: '100%' }} className="fullcard" >
                        <Card.Img className="card-img images" variant="top" src={galleries?.image} />
                    </Card>

                </div>

            ))}
        </div>
    );
};

export default Gallery;