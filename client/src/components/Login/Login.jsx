import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ loggedIn, setLoggedIn }) => {

        const navigate = useNavigate();

        const [formData, setFormData] = useState({
            email: '',
            password: '',
            loginErrors: ''
        })

        const handleSubmit = (e) => {

            axios.post("http://localhost:3000/sessions", {
                user: {
                    email: formData.email,
                    password: formData.password,
                }
            },
            { withCredentials: true})
            .then(response => {
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
            <button id="login-form" className="button" type='submit'>Log In</button>
            <NavLink className="NavLink" to='/signup'>Don't Have an Account?</NavLink>
            </form>
            </div>
        )
    }

    export default Login