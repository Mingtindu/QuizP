import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginForm.css';
//import useHistory  from 'react-router-dom';
const LoginForm = () => {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false // Add showPassword state
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const signUp = async () => {
        console.log(formData);
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.status == 201) {
                console.log('login hai');
                // Redirect to the dashboard page
                window.location.href = '/dashboard';

                //history.push('/dashboard');
            }
        } catch (err) {
            console.log(`error happen :${err}`);

        }
    };

    const togglePasswordVisibility = () => {
        setFormData({ ...formData, showPassword: !formData.showPassword });
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </label>
                <input name='email' onChange={changeHandler} value={formData.email} type="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">
                    <FontAwesomeIcon icon={faLock} />
                </label>
                <input
                    name='password'
                    onChange={changeHandler}
                    value={formData.password}
                    type={formData.showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                />
                <button className="password-toggle-button" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={formData.showPassword ? faEyeSlash : faEye} />
                </button>
            </div>
            <button onClick={signUp} className="btn-login">Login</button>
            <div className="or">OR</div>
            <button className="btn-google">Sign up with Google</button>
        </div>
    );
};

export default LoginForm;
