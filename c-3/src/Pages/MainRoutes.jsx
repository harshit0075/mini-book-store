import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import {Login} from "./Login"
import { EditBook } from "./EditBook";
import { PrivateRoute } from "../Components/PrivateRoute";
export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/edit-book/:id" element={<PrivateRoute><EditBook/></PrivateRoute>}/>
  </Routes>;
};
