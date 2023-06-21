import React from "react";
import "./ReviewCard.css";

const ReviewCart = (props) => {
  // console.log(props);
  const { name, author, rating, picture, price, date } = props.tshirt;
  return (
    <div className="card_container">
      <div className="card_details">
        <img src={picture}></img>
        <h2>{name}</h2>
        <h4>Author Name: {author}</h4>
        <h5>Price: ${price}</h5>
        <p>Review date: {date}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ReviewCart;
