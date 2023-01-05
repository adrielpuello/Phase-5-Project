import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/verifyuser')
    }

    return (
        <>
        <h1>Hey There</h1>
        <button onClick={handleClick}>Get Started</button>
        </>
        
    )
}

export default LandingPage;