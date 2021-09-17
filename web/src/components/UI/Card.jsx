import "./Card.scss";

import React from "react";

const Card = ({ color = "card", elevation, className, ...props }) => (
    <div
        className={`card bg-${color}`}
        {...props}
    />
);

export default Card;
