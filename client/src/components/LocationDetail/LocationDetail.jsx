import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReviewContainer from '../ReviewContainer/ReviewContainer'
import Header from '../Header/Header'
import './LocationDetail.css'

function LocationDetail({loggedIn, setLoggedIn}) {
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const params = useParams()

  useEffect(()=>{
    fetch(`/locations/${params.id}`)
    .then(res => { 
      if(res.ok){
        res.json().then(data => {
          setLocation(data)
          setLoading(false)
        })
      } else {
        console.log('error')
        res.json().then(data => setErrors(data.error))
      }
    })
  },[params.id])
 
  if(loading) return <div className="loading">loading...</div>
  if(errors) return <h1>{errors}</h1>

  const { name, event_type, address, reviews} = location

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedin={setLoggedIn}/>
      <div className="content">
          <div className='wrapper'>
            <div id="location-page" >
            <h1>{name}</h1>
              <h3>{event_type}</h3>
              <h3>{address}</h3>
              <h3>Reviews : </h3>
              <div><ReviewContainer reviews={reviews}/></div>
            </div>
          </div>
      </div>
      </div>
    )
  }
  export default LocationDetail