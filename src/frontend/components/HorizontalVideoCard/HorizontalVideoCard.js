import React from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { nFormatter } from "../../utils";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;

  const navigate = useNavigate();

  return (
    <div
      className="horizontal-video-card"
      onClick={() => navigate(`/explore/${_id}`)}
    >
      <img
        className="horizontal-video-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt={title}
      />
      <div className="horizontal-video-card-info">
        <div className="horizontal-video-card-primary">
          <p className="horizontal-video-card-title">{title}</p>
          <span className="material-icons horizontal-video-card-more">
            more_vert
          </span>
        </div>
        <div className="horizontal-video-card-secondary">
          <span className="vertical-video-card-views">
            {nFormatter(views, 1)} views
          </span>
          <span className="material-icons vertical-video-card-secondary-separator">
            fiber_manual_record
          </span>
          <Moment fromNow>{uploadedAt}</Moment>
        </div>
      </div>
    </div>
  );
};
