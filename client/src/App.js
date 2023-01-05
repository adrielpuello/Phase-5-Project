import React, { useState } from "react"; 
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Trips from "./components/Trips/Trips"
import { getPlacesData } from './api'
import axios from "axios";

const App = () => {

    const [loggedIn , setLoggedIn] = useState({
        user: {},
        loggedInStatus: 'NOT_LOGGED_IN',
    });

    const checkLoginStatus = () => {
        axios.get('http://localhost:3000/logged_in', { withCredentials: true})
        .then(response => {
            if (response.data.logged_in && loggedIn.loggedInStatus === "NOT_LOGGED_IN")
                setLoggedIn({
                    user: response.data.user,
                    loggedInStatus: 'LOGGED_IN'
                })
            else if (!response.data.logged_in & loggedIn.loggedInStatus === 'LOGGED_IN')
            setLoggedIn({
                user: {},
                loggedInStatus: 'NOT_LOGGED_IN'
            })
        })
        .catch(error => {
            console.log(error.data)
        });
    }

    checkLoginStatus();

    return (
        <>
            <Routes>
                <Route path='/Home' element={<Home getPlacesData={getPlacesData} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/' element={<LandingPage />}/>
                <Route path='/verifyuser' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/signup' element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/bookmarks' element={<Bookmarks />}/>
                <Route path='/trips' element={<Trips />}/>
            </Routes>
        </>
    );

}

export default App