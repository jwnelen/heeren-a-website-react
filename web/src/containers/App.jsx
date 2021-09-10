import React, {Suspense} from 'react';
import './App.css';

import Router from "./Router";
import NavBar from "../components/NavigationBar/navbar";

export default () => {
  return (
      <Suspense fallback={<div className="loader absolute inset-0"/>}>
        <div className="App">
          <NavBar/>
          <Router />
        </div>
      </Suspense>
  );
}