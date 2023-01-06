import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import './LocationForm.css'

function LocationForm({addLocation, loggedIn, setLoggedIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    event_type:'',
    address:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    fetch('/locations',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
        res.json().then(addLocation)
        navigate("/locations")
    })
  }
    return (
      <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div id ='location-form' className='content'>
        <div onSubmit={onSubmit}>
          <label>The Destination :</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} />
          
          <label>Type of Event :</label>
          <input type='text' name='event_type' value={formData.event_type} onChange={handleChange} />
        
          <label>Location :</label>
          <input type='text' name='address' value={formData.address} onChange={handleChange} />

          <input id="add-location" className="button" type='submit' value='Add Location' onClick={onSubmit}/>
        </div>
      </div>
      </>
      
    )
  }
  
  export default LocationForm
