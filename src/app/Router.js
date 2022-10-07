import React from "react";
import { BrowserRouter, Route } from "../../node_modules/react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import "../App.css";
import AnyPhoto from "../pages/AnyPhoto/AnyPhoto";
require('dotenv').config()


export const Router = () => {

  return (
    <BrowserRouter>
      <div className="app">
          <Route component={HomePage} path="/" exact />
          <Route component={AnyPhoto} path="/AnyPhoto" />
      </div>
    </BrowserRouter>
  );
};
