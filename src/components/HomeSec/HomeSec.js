import React from "react";
import "./HomeSec.css";
const HomeSec = (props) => {
  const { picture } = props.shirt;
  const index = 0;
  if (picture && picture.length > index) {
    const selectedPicture = picture[index];

    return <img src={selectedPicture} alt="First Pic" />;
  }
  return (
    <div className="hero_container">
      <div className="left_hero">
        <h4>The Tshirt Mania is here for everyone</h4>
        <p>
          A T-shirt company is a business that specializes in designing,
          producing, and selling T-shirts, typically with various graphics,
          slogans, or customized designs, catering to a wide range of customers
          and markets
        </p>
      </div>
      <div className="right_hero">
        <img src={picture}></img>
      </div>
    </div>
  );
};

export default HomeSec;
