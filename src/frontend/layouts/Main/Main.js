import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "../../pages";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};
