import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './HomeReview.css'

const HomeReview = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('https://floating-hollows-88352.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);


    return (
        <div className="row text-center justify-content-center pot title my-5">
            <h1>Customer Reviews</h1>
            {blog.map((blogs, index) => (
                <div className="col-md-6 col-lg-3 col-sm-6 service justify-content-center text-light">

                    <Card style={{ width: '100%' }} className="fullcard" >

                        <Card.Body className="bg-light text-black rounded-bottom text-start cardbody">
                            <Card.Title><h3 className="blogName">{blogs?.name}</h3></Card.Title>
                            <Card.Text>
                                <span id="description">
                                    <small>{blogs?.review}</small></span><br />


                            </Card.Text>
                            <Card.Text>
                                {/* <span id="rating">
                                    <small>{blogs?.rating}</small></span><br /> */}

                                {/* 0 star */}
                                {blogs?.rating === '0' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                                {/* 1 star */}
                                {blogs?.rating === '1' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                                {/* 2 stars */}
                                {blogs?.rating === '2' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                                {/* 3 stars */}
                                {blogs?.rating === '3' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                                {/* 4 stars  */}
                                {blogs?.rating === '4' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/color/48/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                                {/* 5 stars  */}
                                {blogs?.rating === '5' ?
                                    <p>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>
                                        <span><img style={{ width: "10%" }} src="https://img.icons8.com/fluency/50/000000/star.png" alt="" /></span>

                                    </p> : ''
                                }

                            </Card.Text>






                        </Card.Body>

                    </Card>

                </div>
            ))}
        </div>
    );
};

export default HomeReview;