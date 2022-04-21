import React from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { nFormatter } from "../../utils";
import "./BigHorizontalVideoCard.css";

export const BigHorizontalVideoCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;

  const navigate = useNavigate();

  return (
    <div
      className="big-horizontal-video-card"
      onClick={() => navigate(`/explore/${_id}`)}
    >
      <img
        className="big-horizontal-video-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt=""
      />
      <div className="big-horizontal-video-card-info">
        <div className="big-horizontal-video-card-primary">
          <p className="big-horizontal-video-card-title">{title}</p>
        </div>
        <div className="big-horizontal-video-card-secondary">
          <span className="vertical-video-card-views">
            {nFormatter(views, 1)} views
          </span>
          <span className="material-icons vertical-video-card-secondary-separator">
            fiber_manual_record
          </span>
          <Moment fromNow>{uploadedAt}</Moment>
        </div>
      </div>
      <span className="material-icons big-horizontal-video-card-more">
        more_vert
      </span>
    </div>
  );
};
