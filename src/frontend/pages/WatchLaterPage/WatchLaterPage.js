import React from "react";
import { EmptyStatePage } from "../EmptyStatePage/EmptyStatePage";
import { BigHorizontalVideoCard } from "../../components";
import { useWatchLater } from "../../contexts";

export const WatchLaterPage = () => {
  const { watchLater } = useWatchLater();

  return watchLater.length === 0 ? (
    <EmptyStatePage />
  ) : (
    <div className="user-property-page">
      <div className="user-property-page-cover">
        <div className="user-property-page-cover-media">
          <img
            className="user-property-page-cover-img"
            src={`https://img.youtube.com/vi/${watchLater[0]._id}/maxresdefault.jpg`}
            alt="Watch Later Videos"
          />
          <div className="user-property-page-cover-title">
            <span class="material-icons">watch_later</span>
            <span>Watch Later</span>
          </div>
        </div>
      </div>
      <div className="user-property-page-videos">
        {watchLater.map((watchLaterVideo) => (
          <BigHorizontalVideoCard
            key={watchLaterVideo._id}
            video={watchLaterVideo}
          />
        ))}
      </div>
    </div>
  );
};
