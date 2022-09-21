import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios"
// import { GoogleLogin } from "react-google-login";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { NavLink } from "react-router-dom";
export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
   
  
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://127.0.0.1:8000/store/userlogin/",data)
    .then(res=>console.log(res.data))
  };


  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
        <h5><center>Login</center></h5>
        <div>
          <label className="labelEmail">Email</label>
          <br />
          <input
            type="email"
            {...register("email")}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>

          <div>
            <br />
            <div>
              <label className="labelPass">Password</label>
              <br />
              <input
                name="password"
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <br />

            <br />
          </div>
          <input type="submit" class="btn btn-primary"/>
          <p className='mt-3'>Alredy Have an Accout?<span><NavLink to="signup" >Signup</NavLink></span> </p>
        </div><br/>

      </form>
    </div>
  );
}