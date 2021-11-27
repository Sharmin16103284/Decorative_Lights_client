import React from 'react';
import { useForm } from "react-hook-form";
import Dashboard from '../Dashboard/Dashboard';

const Review = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // add new service
    const onSubmit = data => {

        // https://gentle-cliffs-25726.herokuapp.com/

        fetch(`https://floating-hollows-88352.herokuapp.com/blogs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                if ((result).insertedId) {
                    alert('No review added');
                } else {
                    alert('New review added');
                    // data.target.reset();
                }
            })

        // .then((result)=>console.log(result));
        // console.log(data);

    };



    return (
        <div> 

            <Dashboard></Dashboard>

            <h1 style={{ color: "#ff86a2", marginTop: '5%' }}>Write Your Feedback</h1>

            {/* Add new Review form */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="m-2 p-2" type="text" {...register("name", { required: true })} required placeholder="Name" /><br />
                <input className="m-2 p-2" type="text"  {...register("review", { required: true })} required placeholder="Feedback" />
                <br />

                <select class="m-2 p-2" style={{ width: "15%", marginLeft: "50px" }} id="exampleFormControlSelect1" {...register("rating", { required: true })} required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <br />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="m-2 p-2 btn text-light fw-bold" style={{ backgroundColor: "#ff86a2" }} type="submit" />
            </form>
            <br />
        </div>
    );
};

export default Review;