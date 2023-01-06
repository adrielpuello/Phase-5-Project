import {Link} from 'react-router-dom'

function ReviewCard({review}) {
    const {caption, message, id} = review

    return (
      <>
        <div className="content">
          <Link to={`/locations/${id}`}></Link>
            <h2>{caption}</h2>
            <p>Review : {message}</p>
        </div>
     </>
    );
  }
  
  export default ReviewCard