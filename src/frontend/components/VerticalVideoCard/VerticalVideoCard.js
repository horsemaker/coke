import React from "react";
import Moment from "react-moment";
import { nFormatter } from "../../utils";
import "./VerticalVideoCard.css";

export const VerticalVideoCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;

  return (
    <div className="vertical-video-card">
      <img
        className="vertical-video-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt={title}
      />
      <div className="vertical-video-card-primary">
        <p className="vertical-video-card-title">{title}</p>
        <span class="material-icons vertical-video-card-more">more_vert</span>
      </div>
      <div className="vertical-video-card-secondary">
        <span className="vertical-video-card-views">
          {nFormatter(views, 1)} views
        </span>
        <span class="material-icons vertical-video-card-secondary-separator">
          fiber_manual_record
        </span>
        <Moment fromNow>{uploadedAt}</Moment>
      </div>
    </div>
  );
};
