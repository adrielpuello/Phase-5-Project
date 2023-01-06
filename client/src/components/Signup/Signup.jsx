import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import './Signup.css'

const Signup = ({ loggedIn, setLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        registrationErrors: ''
    })

    const handleSubmit = (e) => {

        axios.post("http://localhost:3000/registrations", {
            user: {
                email: formData.email,
                password: formData.password,
                password_confrimation: formData.password_confirmation,
            }
        },
        { withCredentials: true}
        ).then(response => {
            if (response.data.status === 'created') {
                navigate('/home');
                setLoggedIn({...loggedIn, user: response.data.user});
                setLoggedIn({...loggedIn, loggedInStatus: 'LOGGED_IN'});
            }
        }).catch(error => {
            console.log(error.response.data)
        })
        e.preventDefault();
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div id ="login-page">
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email..." value={formData.email} onChange={handleChange} required></input>
        <input type="password" name="password" placeholder="Enter Password..." value={formData.password} onChange={handleChange} required></input>
        <input type="password" name="password_confirmation" placeholder="Confirm Password..." value={formData.password_confirmation} onChange={handleChange} required></input>
        <button id="login-form" className="button" type='submit'>Sign Up</button>
        <NavLink className="NavLink" to='/verifyuser'>Already Have an Account?</NavLink>
        </form>
        </div>
    )
}

export default Signup;