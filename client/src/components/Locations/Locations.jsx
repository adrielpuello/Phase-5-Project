import React from "react";
import Header from "../Header/Header";
import LocationContainer from '../LocationContainer/LocationContainer'

function Locations({ loggedIn, setLoggedIn, locations, deleteLocation }) {



    return (
        <div>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <h1>All Your Adventures</h1>
        <LocationContainer locations={locations} deleteLocation={deleteLocation}/>
        </div>   
    )
}

export default Locations;