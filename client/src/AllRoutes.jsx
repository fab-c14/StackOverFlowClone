import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
function AllRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth />} />
    </Routes>
  );
}

export default AllRoutes;
