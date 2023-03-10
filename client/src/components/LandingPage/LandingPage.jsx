import React from "react";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'


const LandingPage = ({logo}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/verifyuser')
    }

    return (
        <div id="landingpage">
        <div><img className='img' src={logo} alt='logo'/></div>    
        <div> 
        <h1>Adventure Awaits</h1>
        <button className="button" onClick={handleClick}>Get Started</button>
        </div>
        </div>
        
    )
}

export default LandingPage;