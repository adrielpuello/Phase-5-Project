import React, { useState, useEffect } from "react"; 
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Locations from "./components/Locations/Locations"
import { getPlacesData } from './api'
import axios from "axios";
import './App.css'
import logo from './background/AW-logo.png.png'
import LocationDetail from './components/LocationDetail/LocationDetail'
import LocationForm from './components/LocationForm/LocationForm'
import EditLocationForm from './components/EditLocationForm/EditLocationForm'

const App = () => { 

    const [locations, setLocations] = useState([])
    const [errors, setErrors] = useState(false)

    const [loggedIn , setLoggedIn] = useState({
        user: {},
        loggedInStatus: 'NOT_LOGGED_IN',
    }); 

    useEffect(() => {
        fetchLocations()
      },[])
    
      const fetchLocations = () => {
        fetch('http://localhost:3000/locations')
        .then(res => {
          if(res.ok){
            res.json().then(setLocations)
          }else {
            res.json().then(data => setErrors(data.error))
          }
        })
      }

      const updateLocation = (updatedLocation) => setLocations(current => {
        return current.map(location => {
         if(location.id === updatedLocation.id){
           return updatedLocation
         } else {
           return location
         }
        })
      })

    const addLocation = (location) => setLocations(current => [...current, location])
    const deleteLocation = (id) => setLocations(current => current.filter(b => b.id !== id))   

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
                <Route path='/' element={<LandingPage logo={logo}/>}/>
                <Route path='/verifyuser' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/signup' element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} locations={locations} deleteLocation={deleteLocation}/>}/>
                <Route path='/locations' element={<Locations loggedIn={loggedIn} setLoggedIn={setLoggedIn} locations={locations}/>}/>
                <Route path='/locations/:id' element={<LocationDetail loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/locations/new' element={<LocationForm addLocation={addLocation} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path='/locations/:id/edit' element={<EditLocationForm updateLocation={updateLocation} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>

            </Routes>
        </>
    );

}

export default App