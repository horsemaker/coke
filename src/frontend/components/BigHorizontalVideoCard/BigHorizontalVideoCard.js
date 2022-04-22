import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import { CardDropdown } from "../CardDropdown/CardDropdown";
import { PlaylistsModal } from "../PlaylistsModal/PlaylistsModal";
import { nFormatter } from "../../utils";
import "./BigHorizontalVideoCard.css";

export const BigHorizontalVideoCard = ({ video }) => {
  const { _id, title, views, uploadedAt } = video;

  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className="big-horizontal-video-card"
      onClick={() => navigate(`/explore/${_id}`)}
      onMouseLeave={() => setIsDropdownMenuOpen(false)}
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
      <div className="big-horizontal-video-card-more">
        <CardDropdown
          video={video}
          isDropdownMenuOpen={isDropdownMenuOpen}
          setIsDropdownMenuOpen={setIsDropdownMenuOpen}
          showPlaylistModal={() => setShowPlaylistsModal(true)}
        />
      </div>
      {showPlaylistsModal && (
        <PlaylistsModal
          video={video}
          closePlaylistModal={() => setShowPlaylistsModal(false)}
        />
      )}
    </div>
  );
};
