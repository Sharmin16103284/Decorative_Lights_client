import React from 'react';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';

const AddnewService = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // add new service
  const onSubmit = data => {

// https://gentle-cliffs-25726.herokuapp.com/

    fetch(`https://floating-hollows-88352.herokuapp.com/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        if ((result).insertedId) {
          alert('No Product Added');
        } else {
          alert('New Product Added');
          // data.target.reset();
        }
      })

    // .then((result)=>console.log(result));
    // console.log(data);

  };

  return (
    <div>
      <Dashboard></Dashboard>
      <h1 style={{ color: "#ff86a2", marginTop: '5%' }}>add a new Product</h1>

      {/* Add new service form */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className="m-2 p-2" {...register("id", { required: true })} required placeholder="ID" /><br />
        <input className="m-2 p-2" {...register("name", { required: true })} required placeholder="Name" /><br />
        <input className="m-2 p-2" {...register("description", { required: true })} required placeholder="Description" />
        <br />
        <input className="m-2 p-2" {...register("image", { required: true })} required placeholder="Image" />
        <br />
        <input className="m-2 p-2" type="number" {...register("price", { required: true })} required placeholder="Price" /><br />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="m-2 p-2 btn text-light fw-bold" style={{ backgroundColor: "#ff86a2" }} type="submit" />
      </form>
      <br />
    </div>
  );
};

export default AddnewService;