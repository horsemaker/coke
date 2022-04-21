import React from "react";
import { EmptyStatePage } from "../EmptyStatePage/EmptyStatePage";
import { BigHorizontalVideoCard } from "../../components";
import { useLikes } from "../../contexts";
import "./LikesPage.css";

export const LikesPage = () => {
  const { likes } = useLikes();

  return likes.length === 0 ? (
    <EmptyStatePage />
  ) : (
    <div className="user-property-page">
      <div className="user-property-page-cover">
        <div className="user-property-page-cover-media">
          <img
            className="user-property-page-cover-img"
            src={`https://img.youtube.com/vi/${likes[0]._id}/maxresdefault.jpg`}
            alt="Liked Videos"
          />
          <div className="user-property-page-cover-title">
            <span class="material-icons">thumb_up</span>
            <span>Liked Videos</span>
          </div>
        </div>
      </div>
      <div className="user-property-page-videos">
        {likes.map((likedVideo) => (
          <BigHorizontalVideoCard key={likedVideo._id} video={likedVideo} />
        ))}
      </div>
    </div>
  );
};
