import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setLoggedIn }) => {

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
                setLoggedIn({
                    user: response.data.user,
                    loggedInStatus: 'LOGGED_IN'
                })
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
        <div>
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter Email..." value={formData.email} onChange={handleChange} required></input>
        <input type="password" name="password" placeholder="Enter Password..." value={formData.password} onChange={handleChange} required></input>
        <input type="password" name="password_confirmation" placeholder="Confirm Password..." value={formData.password_confirmation} onChange={handleChange} required></input>
        <button type='submit'>Sign Up</button>
        </form>
        </div>
    )
}

export default Signup;