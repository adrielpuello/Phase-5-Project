import {Link, useNavigate} from 'react-router-dom'
import './LocationCard.css'

function LocationCard({location}) {
  const {name, event_type, address, id} = location
  const navigate = useNavigate()

  function handleDelete() {
     fetch(`/locations/${id}`,{
       method:'DELETE',
      })
      navigate('/locations')
      window.location.reload(true);
  }

    return (
      <>
      <div className='grid-item'>
        <Link className='Link' to={`/locations/${id}`}> <h2>{name}</h2></Link>
          <h2>{event_type}</h2>
          <h2>{address}</h2>
          <button className="button"><Link id="edit-button" className='Link' to={`/locations/${id}/edit`}>Edit</Link></button>
          <button className="button" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default LocationCard