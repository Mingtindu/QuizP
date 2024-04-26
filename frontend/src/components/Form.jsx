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
    const onGoogleSignIn = async () => {
        const auth2 = window.gapi.auth2.getAuthInstance();
        try {
            const googleUser = await auth2.signIn();
            const profile = googleUser.getBasicProfile();
            setFormData({
                ...formData,
                name: profile.getName(),
                email: profile.getEmail(),
                // You may want to handle password differently for Google sign-in
            });
            // You can call signUp or any other function to proceed with the sign-up process
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    }
    // const signUp = async () => {
    //     console.log(formData);
    // }

    const signUp = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/v1/users/register', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const data = await res.json();
            
            if (res.status === 201) {
                alert("Successfully created user ");
                window.location = '/Dashboard';
            } else if (res.status === 409) {
                alert("User with same email exists");
            } else {
                console.log(data.error || "Unknown Error");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    

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
        <button onClick={onGoogleSignIn}>Sign in with Google</button>
        </div>
        </div>
        </>

    )
}

export default Form;