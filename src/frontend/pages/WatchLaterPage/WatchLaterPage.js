import React from "react";
import { useWatchLater } from "../../contexts";
import "./WatchLaterPage.css";

export const WatchLaterPage = () => {
  const { watchLater } = useWatchLater();

  return (
    <div className="watch-later-page">
      {watchLater.map((watchLaterVideo) => watchLaterVideo.title)}
    </div>
  );
};
