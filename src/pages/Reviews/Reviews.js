import React from "react";
import "./Reviews.css";
import useTshirt from "../../hooks/useTshirt";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Reviews = () => {
  const [tshirts, setTshirts] = useTshirt();

  // console.log(tshirts);
  return (
    <div className="review_card">
      {tshirts.map((tshirt) => (
        <ReviewCard key={tshirt._id} tshirt={tshirt}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
