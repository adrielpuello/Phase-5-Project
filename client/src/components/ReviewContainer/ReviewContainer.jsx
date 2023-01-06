import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewContainer = ({ reviews }) => {
    return (
        <div className="content">
        <div>
            {reviews.map(review => <ReviewCard key={review.id} review={review}  />)}
        </div>
     </div>
    );
  }
  

export default ReviewContainer;