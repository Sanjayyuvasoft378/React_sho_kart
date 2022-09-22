import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Category = () => {
    console.log("object");
  return (
        axios.
        get("http://127.0.0.1:8000/store/CategoriesListAPI/")
        .then(res=>console.log(res.data))
      
  )
}
