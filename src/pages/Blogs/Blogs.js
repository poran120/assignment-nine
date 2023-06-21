import React from "react";
import "./Blogs.css";

const Blogs = (props) => {
  return (
    <div className="question_container">
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
        <p>
          Semantic tags are designed to enhance the accessibility, search engine
          optimization (SEO), and overall understanding of a web page's
          structure. They improve the readability and maintainability of the
          code, making it easier for developers to understand the content and
          style it appropriately.
        </p>
      </div>
      <div className="question_third">
        <h3>Difference between inline and inline block?</h3>
        <p>
          Certainly! Here's a concise definition for both inline and
          inline-block: - inline: The inline display property makes an element
          behave like text, flowing within the content and not creating line
          breaks. It ignores vertical margins and cannot have explicit width or
          height values. inline-block: The inline-block display property
          combines elements of inline and block levels. It allows elements to be
          displayed horizontally without line breaks, while also respecting
          dimensions, margins, and paddings. It can have explicit width and
          height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
