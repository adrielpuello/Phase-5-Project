import {Link, useNavigate} from 'react-router-dom'

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
      <div>
        <Link to={`/locations/${id}`}> <h2>{name}</h2></Link>
          <p >{event_type}</p>
          <p>{address}</p>
          <button className="button"><Link id="edit-button" to={`/locations/${id}/edit`}>Edit</Link></button>
          <button className="button" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default LocationCard