import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Table } from "react-bootstrap";
import Dashboard from '../Dashboard/Dashboard';

const ManageService = () => {

  // const { user } = useAuth();
  // const [manageorder, setManageOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(null);

  const [bookings, setBookings] = useState([])
  useEffect(() => {
    fetch('https://floating-hollows-88352.herokuapp.com/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [isDelete])


  const handleDelete = (id) => {
    console.log(id)

    const proceed = window.confirm('Are you sure, you want to delete?');

    if (proceed) {
      fetch(`https://floating-hollows-88352.herokuapp.com/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          // console.log(result)
          if (result.deletedCount) {
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    };
  };


  return (
    <div>
      <Dashboard></Dashboard>
      <h1 style={{ color: "#ff86a2", marginTop: "5%" }}>Manager All Products</h1>
      <div className="table" style={{ width: '90%', margin: '5%', border: '1px solid black' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Image</th>
              <th style={{ width: "10%" }}>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          {bookings.map((bookings, index) => (
            <tbody>
              <tr>
                <td><img src={bookings?.image} style={{ width: "100%" }} alt="" /></td>
                <td>{bookings?.name}</td>
                <td>{bookings?.description}</td>
                <td>$<span>{bookings?.price}</span></td>
                <button
                  onClick={() => handleDelete(bookings._id)}
                  className="btn bg-danger p-2 m-2 text-light">
                  Delete
                </button>
                
              </tr>
            </tbody>
          ))}
        </Table>
      </div>


    </div>
  );
};

export default ManageService;