import "./Wrapper.scss";
import React from "react";

export default ({ className, size = "xl", ...props }) => (
    <div
        className={`wrapper w-full px-4 md:px-8 max-w-xl`}
        {...props}
    />
);