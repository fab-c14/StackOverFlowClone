import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
function AllRoutes() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth />} />
      <Route exact path='/Questions' element={<Questions />} />
      <Route exact path='/AskQuestion' element={<AskQuestion />} />
    </Routes>
  );
}

export default AllRoutes;
