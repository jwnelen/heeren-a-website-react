import "./Card.scss";
import React from "react";

const Card = ({ color = "card", elevation, className, ...props }) => (
    <div
        className={`card w-full w p-2 bg-${color}`}
        {...props}
    />
);

export default Card;
