import React from "react";
import useTshirt from "../../hooks/useTshirt";

const Home = () => {
  const [tshirts, setTshirts] = useTshirt();
  // console.log(tshirts);

  return (
    <div>
      <div className="left_hero">
        <h4>The Tshirt Mania is here for everyone</h4>
        <p>
          A T-shirt company is a business that specializes in designing,
          producing, and selling T-shirts, typically with various graphics,
          slogans, or customized designs, catering to a wide range of customers
          and markets
        </p>
      </div>
      <div className="right_hero"></div>
    </div>
  );
};

export default Home;
