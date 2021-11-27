import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Table } from "react-bootstrap";
// import DashboardHome from '../Dashboard/DashboardHome';
import Dashboard from '../Dashboard/Dashboard';

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([])
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://floating-hollows-88352.herokuapp.com/userBooking/${user.email}`)
      .then(res => res.json())
      .then(data => setMyOrder(data))
  }, [isDelete]);

  const handleDelete = (id) => {
    console.log(id)
    const proceed = window.confirm('Are you sure, you want to delete?');

    if (proceed) {
      fetch(`https://floating-hollows-88352.herokuapp.com/deleteMyorder/${id}`, {
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
    }
  };

  // pending status change
  const handlePending = () => {
    var btn = document.getElementById("Pending");

    if (btn.value === "Pending") {
      btn.value = "Delivered";
      btn.innerHTML = "Delivered";
    }
    else {
      btn.value = "Pending";
      btn.innerHTML = "Pending";
    }
  };


  return (

    <div>

<Dashboard></Dashboard>
      <h1 style={{ color: "#ff86a2", marginTop: "5%" }}>My Orders</h1>
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
          {myOrder.map((myOrders, index) => (
            <tbody>
              <tr>
                <td><img src={myOrders?.image} style={{ width: "100%" }} alt="" /></td>
                <td>{myOrders?.name}</td>
                <td>{myOrders?.description}</td>
                <td>$<span>{myOrders?.price}</span></td>
                <button
                  onClick={() => handleDelete(myOrders._id)}
                  className="btn bg-danger p-2 m-2 text-light">
                  Delete
                </button>
                <button
                  className="btn bg-primary text-light p-2 m-2" id="Pending" onClick={handlePending} value="Pending">Pending</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>


    </div>



  );
};

export default MyOrder;