import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Table } from "react-bootstrap";
import Dashboard from '../Dashboard/Dashboard';

const ManageAllOrder = () => {
  const { user } = useAuth();
  const [manageorder, setManageOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(null);


  useEffect(() => {
    fetch('https://floating-hollows-88352.herokuapp.com/userBooking')
      .then(res => res.json())
      .then(data => setManageOrder(data))
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
    };
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
      <h1 style={{ color: "#ff86a2", marginTop: "5%" }}>Manager All Orders</h1>
      <div className="table" style={{ width: '90%', margin: '5%', border: '1px solid black' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Image</th>
              <th style={{ width: "10%" }}>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th style={{ width: "15%" }}>User Name</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          {manageorder.map((manageorders, index) => (
            <tbody>
              <tr>
                <td><img src={manageorders?.image} style={{ width: "100%" }} alt="" /></td>
                <td>{manageorders?.name}</td>
                <td>{manageorders?.description}</td>
                <td>$<span>{manageorders?.price}</span></td>
                <td>{manageorders.userName}</td>
                <td>
                  <button
                    onClick={() => handleDelete(manageorders._id)}
                    className="btn bg-danger p-2 m-2 text-light">
                    Delete
                  </button>
                  <button
                    className="btn bg-primary text-light p-2 m-2" id="Pending" onClick={handlePending} value="Pending">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>


    </div>



  );
};

export default ManageAllOrder;