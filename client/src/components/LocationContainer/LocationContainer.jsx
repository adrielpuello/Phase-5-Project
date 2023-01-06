import React from 'react'
import LocationCard from '../LocationCard/LocationCard'
import './LocationContainer.css'

const LocationContainer = ({locations}) => {
    return (
        <div className="content">
         <div className="grid-container">
             {locations.map(location => <LocationCard key={location.id} location={location}  />)}
         </div>
     </div>
    );
}

export default LocationContainer