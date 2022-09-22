import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {


  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/store/usersignup/", data)
      .then((res) => console.log(res.data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <h4>Create Your Acount Here </h4>
        <label htmlFor="">First Name</label>
        <br />
        <input {...register("firstName", { required: "enter firstname" })} />
        {errors.firstName && <p>first name is required.</p>}

        <br />

        <label htmlFor="">lastName</label>
        <br />
        <input {...register("lastName", { required: "enter last name" })} />
        {errors.lastName && <p>last name is required.</p>}

        <br />

        <label htmlFor="">Email</label>
        <br />
        <input {...register("email", { required: "enter email address" })} />
        {errors.email && <p>Email is required.</p>}

        <br />

        <label htmlFor="">Mobile No</label>
        <br />
        <input {...register("mobileNo", { required: "enter Mobile NO " })} />
        {errors.mobileNo && <p>Mobile No is required.</p>}

        <br />

        <label htmlFor="">Address</label>
        <br />
        <input {...register("Address", { required: "enter address" })} />
        {errors.Address && <p>Address is required.</p>}

        <br />

        <label htmlFor="">password</label>
        <br />
        <input {...register("password", { required: "enter a password" })} />
        {errors.password && <p>Password is required.</p>}
        <input type="submit" className="rgsBtn" />
      <p>If you have already an acount </p>
      <p>Please signin here ...? <Link to="/login"><strong>Signin</strong>
        </Link>
      </p>
      </form>
    </div>
  );
};
