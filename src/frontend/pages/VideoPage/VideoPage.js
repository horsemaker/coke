import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Moment from "react-moment";
import { useSidebar, useVideos } from "../../contexts";
import "./VideoPage.css";
import { HorizontalVideoCard } from "../../components";

export const VideoPage = () => {
  const videoPageRef = useRef();
  const [videoPageWidth, setVideoPageWidth] = useState();

  const { videoId } = useParams();

  const { showSidebar } = useSidebar();
  const { videos } = useVideos();
  const currentVideo = videos.find((video) => video._id === videoId);

  const getVideoPageSize = () => {
    const newWidth = videoPageRef.current.clientWidth;
    setVideoPageWidth(newWidth);
  };

  useEffect(() => {
    getVideoPageSize();
  }, [videos, showSidebar]);

  useEffect(() => {
    window.addEventListener("resize", getVideoPageSize);
  }, []);

  return (
    <div
      ref={videoPageRef}
      className="video-page"
      style={{
        flexDirection: videoPageWidth < 1165 ? "column" : "row",
      }}
    >
      <div
        className="video-section"
        style={{ alignSelf: videoPageWidth < 1165 && "stretch" }}
      >
        <div className="video-player">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`http://www.youtube.com/watch?v=${videoId}`}
            controls
          />
        </div>
        <div className="video-section-primary">
          <h1 className="video-title">{currentVideo?.title}</h1>
          <div className="video-info">
            <div className="video-info-primary">
              <span>{currentVideo?.views} views</span>
              <span className="material-icons vertical-video-card-secondary-separator">
                fiber_manual_record
              </span>
              <Moment fromNow>{currentVideo?.uploadedAt}</Moment>
            </div>
            <div className="video-info-secondary">
              <button className="video-action-button">
                <span
                  className="material-icons-outlined video-icon"
                  title="I like this"
                >
                  thumb_up
                </span>
              </button>
              <button className="video-action-button">
                <span
                  className="material-icons-outlined video-icon"
                  title="I will watch this later"
                >
                  watch_later
                </span>
              </button>
              <button className="video-action-button">
                <span
                  className="material-icons video-icon"
                  title="Add to a playlist"
                >
                  playlist_add
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="video-section-separator"></div>
        <div
          className="video-section-secondary"
          dangerouslySetInnerHTML={{ __html: currentVideo?.description }}
        ></div>
      </div>
      <div className="video-more">
        {videos.map((video) => (
          <HorizontalVideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};
