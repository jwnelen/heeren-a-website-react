import "./Card.scss";
import React from "react";

const Card = ({ color = "card", elevation, className, ...props }) => (
    <div
        className={`card w-full p-2 bg-${color} ${className}`}
        {...props}
    />
);

export default Card;
