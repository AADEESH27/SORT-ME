import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h3>Version 1.0.0</h3>
      <h4>
        SortMe is a React App project by Aadeesh Bali to visually compare the
        sorting process, speed, and effeciency of the six most common data
        sorting algorithms. SortMe uses React JS implementation with a fully
        functioning DOM based UI, complete with HTML/CSS Styling, Interactive UI
        Components, and Routing.
      </h4>
      <Link style={{ color: "#fac748" }} to="/">
        Return to Sorting
      </Link>
    </div>
  );
};

export default About;
