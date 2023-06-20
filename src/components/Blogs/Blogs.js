import React from "react";
import { Carousel } from "react-bootstrap";

const Blogs = (props) => {
  return (
    <div>
      <div className="question_one">
        <h3>What is context API and how it works?</h3>
        <p>
          The Context API in React is a feature that allows you to manage global
          state and share data between components without the need for prop
          drilling. It consists of a Context object and a Provider component.
          The Context object acts as a container for the shared data, and the
          Provider component is responsible for providing the data to its child
          components. The Consumer component allows components to access the
          shared data provided by the Provider. Overall, the Context API
          simplifies the process of sharing and accessing data across components
          in a React application.
        </p>
      </div>
      <div className="question_two">
        <h3>What is a semantic tag?</h3>
        <p></p>
      </div>
      <div className="question_third">
        <h3>Difference between inline and inline block?</h3>
        <p></p>
      </div>
    </div>
  );
};

export default Blogs;
