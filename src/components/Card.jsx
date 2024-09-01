import React from "react";
import "../Styles/CardStyles.css";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";

function Card(props) {
  return (
    <div className="t-card pull-up">
      <div className="t-image">
        <img
          src={process.env.PUBLIC_URL + props.image}
          alt="project1"
          className="mx-auto my-auto"
        />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <Button variant="outline">
        En savoir plus
        <FaArrowRight />
      </Button>
    </div>
  );
}

export default Card;
