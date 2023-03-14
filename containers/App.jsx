import React, {Suspense} from 'react';
import './App.scss';

import Router from "./Router";
import {LocationProvider} from "@reach/router";

export default () => {
  return (
      <Suspense fallback={<div className="loader absolute inset-0"/>}>
        <div className="App">
          <LocationProvider>
            <Router/>
          </LocationProvider>
        </div>
      </Suspense>
  );
}