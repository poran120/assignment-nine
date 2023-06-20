import React from "react";
import useTshirt from "../../hooks/useTshirt";

const Home = () => {
  const [tshirts, setTshirts] = useTshirt();
  // console.log(tshirts);

  return (
    <div>
      <h4>This is home section</h4>
    </div>
  );
};

export default Home;
