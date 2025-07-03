import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate(); // ✅ این خط اضافه شده

  return (
    <React.Fragment>
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <p>We are dedicated to providing the best service possible.</p>
      <button
        onClick={() => {
          navigate("/"); // ✅ حالا درست کار می‌کنه
        }}
      >
        go to home game
      </button>
    </React.Fragment>
  );
};

export default About;
