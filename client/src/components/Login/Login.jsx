import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const {username, password} = formData
    const navigate = useNavigate()

    function onSubmitLogin(e){
        const user = {
            username,
            password
        }

        fetch('/login',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => sessionStorage.setItem('user_id', user.id))
    
        navigate('/home')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <> 
        <div id="login-page" className="content" > 

        <label>Username : </label>
        <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
      
        <label>Password : </label>
        <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
       
        <input id="login-form" className="button" type='submit' value='Log In' onClick={()=> {
            onSubmitLogin();
            setSignup(true);
        }}/>
        <NavLink to='/signup'>Don't have an account?</NavLink>
        {errors? <div>{errors}</div>:null}
        </div>
        </>
    )
}

export default Login