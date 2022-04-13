import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
