import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const UserBooking = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const [singleBooking, setSingleBooking] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch(`https://floating-hollows-88352.herokuapp.com/userBooking/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert('Order placed successfully');
                    // data.target.reset();
                }

            })
    };


    useEffect(() => {
        fetch(`https://floating-hollows-88352.herokuapp.com/singleBooking/${id}`)
            .then(res => res.json())
            // .then(data=>setSingleBooking(data))
            .then(data => setSingleBooking(data))

    }, [])
    return (
        <div>
            <h1 style={{color: "#ff86a2" , margin: "20px 0"}}> Ordering: {singleBooking.name}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="m-2 p-2" defaultValue={user.displayName} {...register("userName", { required: true })} required placeholder="User Name" /><br />

                <input className="m-2 p-2" defaultValue={user.email} {...register("email", { required: true })} required placeholder="User Name" /><br />

                <input className="m-2 p-2" defaultValue={singleBooking?.id} {...register("id", { required: true })} required placeholder="ID" /><br />

                <input className="m-2 p-2" defaultValue={singleBooking?.name} {...register("name", { required: true })} required placeholder="Name" /><br />

                <input className="m-2 p-2" defaultValue={singleBooking?.description} {...register("description", { required: true })} required placeholder="Description" /><br />

                <input className="m-2 p-2" defaultValue={singleBooking?.image} {...register("image", { required: true })} required placeholder="Image" /><br />

                <input className="m-2 p-2" defaultValue={singleBooking?.price} type="number" {...register("price", { required: true })} required placeholder="Price" /><br />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="m-2 p-2 btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default UserBooking;