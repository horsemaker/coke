import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ExplorePage,
  HomePage,
  SignInPage,
  SignUpPage,
  VideoPage,
} from "../../pages";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
};
