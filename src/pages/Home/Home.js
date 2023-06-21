import React from "react";
import useTshirt from "../../hooks/useTshirt";
import "./Home.css";
import HomeSec from "../../components/HomeSec/HomeSec";

const Home = () => {
  const [tshirts, setTshirts] = useTshirt();
  // console.log(tshirts);

  return (
    <div>
      {tshirts.map((shirt) => (
        <HomeSec key={shirt._id} shirt={shirt}></HomeSec>
      ))}
    </div>
  );
};

export default Home;
