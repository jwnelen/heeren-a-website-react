import NavBar from "components/UI/NavigationBar";
import React from "react";

export default ({children, components, ...props}) => (
    <div {...props}>
      <NavBar/>
      {children}
    </div>
)