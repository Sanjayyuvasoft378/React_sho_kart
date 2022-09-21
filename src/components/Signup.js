import React from 'react'
import axios from "axios"

export const Signup = () => {
    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://127.0.0.1:8000/store/usersignup/",data)
        .then(res=>console.log(res.data))
      };
  return (
    <div>Signup</div>
  )
}
