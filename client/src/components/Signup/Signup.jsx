import React, { useState } from "react";


const Signup = () => {

    const [formData, setFormData] = useState({
        first_name:'',
        last_name:'',
        username:'',
        password:'',
        country:''
    })
    const {first_name, last_name, username, password} = formData
    const [errors, setErrors] = useState([])

    

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmitSignup(e){
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            username,
            password,
        }
       
        fetch(`/users`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    return (
        <>
        <h1>Signup</h1>
        <label>First Name : </label>
        <input placeholder="Your First Name..." type='text' name='first_name' value={first_name} onChange={handleChange} />
        <label>Last Name : </label>
        <input placeholder="Your Last Name..." type='text' name='last_name' value={last_name} onChange={handleChange} />
        <label>Username : </label>
        <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
        <label>Password : </label>
        <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
        <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmitSignup}/>
        </>
        
    )
}

export default Signup;