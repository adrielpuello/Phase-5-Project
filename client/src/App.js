import React from "react"; 
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Trips from "./components/Trips/Trips"
import { getPlacesData } from './api'

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/Home' element={<Home getPlacesData={getPlacesData}/>}/>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/verifyuser' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/bookmarks' element={<Bookmarks/>}/>
                <Route path='/trips' element={<Trips/>}/>
            </Routes>
        </>
    );

}

export default App