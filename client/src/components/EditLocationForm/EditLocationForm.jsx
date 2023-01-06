import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './EditLocationForm.css'

function EditLocationForm({updateLocation}) {
  const navigate = useNavigate()
  const {id} = useParams()
  const [formData, setFormData] = useState({
    name:'',
    event_type:'',
    address:'',
  })

  useEffect(() => {
    fetch(`/locations/${id}`)
    .then(res => res.json())
    .then(setFormData)
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    e.preventDefault()
    fetch(`/locations/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
        res.json().then(updateLocation)
        navigate(`/locations`)
    })
  }

    return (
        <>
        <div id="edit-location" className='App'>
          <div >
            <label>The Destination : </label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            
            <label> Type of Event : </label>
            <input type='text' name='event_type' value={formData.event_type} onChange={handleChange} />
        
            <label>Location : </label>
            <input type='text' name='address' value={formData.address} onChange={handleChange} />
                
            <input id="update-button" className= "button" type='submit' value='Update Location' onClick={onSubmit}/>
          </div>
        </div>
        </>
    )
  }
  
  export default EditLocationForm
