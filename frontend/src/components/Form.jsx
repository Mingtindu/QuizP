import React, { useState } from "react";
import './Form.css'
const Form = ()=>{
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    const changeHaldler=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });

    }
    const signUp = async()=>{
        console.log(formData);
    }
    return(
        <>  
        <div className="main">
        <h1>Sign Up</h1>
        <div className="input">
        <form >
            <label htmlFor="name">Name <input name="name" onChange={changeHaldler} value={formData.name}  type="text" placeholder="Enter your name" /></label>
           <label htmlFor="email">Email <input name="email" onChange={changeHaldler} value={formData.email}  type="email" placeholder="Enter your email" /></label>
            <label htmlFor="password">Password  <input name="password" onChange={changeHaldler} value={formData.password} type="password" placeholder="Enter your password" /></label>
        </form> 
        <button onClick={()=>{console.log(`button click`); signUp()}}>Register</button>
        </div>
        </div>
        </>

    )
}

export default Form;