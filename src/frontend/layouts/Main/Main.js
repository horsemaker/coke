import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../components";
import {
  ExplorePage,
  HistoryPage,
  HomePage,
  LikesPage,
  SignInPage,
  SignUpPage,
  VideoPage,
  WatchLaterPage,
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
        <Route
          path="/likes"
          element={
            <RequireAuth>
              <LikesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequireAuth>
              <WatchLaterPage />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <HistoryPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
