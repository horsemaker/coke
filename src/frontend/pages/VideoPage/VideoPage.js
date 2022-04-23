import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Moment from "react-moment";
import {
  useAuth,
  useHistory,
  useLikes,
  useSidebar,
  useVideos,
  useWatchLater,
} from "../../contexts";
import { HorizontalVideoCard, PlaylistsModal } from "../../components";
import {
  addHistoryService,
  addLikeService,
  addWatchLaterService,
  removeHistoryService,
  removeLikeService,
  removeWatchLaterService,
} from "../../services";
import { SET_HISTORY, SET_LIKES, SET_WATCH_LATER } from "../../constants";
import "./VideoPage.css";

export const VideoPage = () => {
  const videoPageRef = useRef();
  const [videoPageWidth, setVideoPageWidth] = useState();
  const [showPlaylistsModal, setShowPlaylistsModal] = useState(false);

  const { videoId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { auth } = useAuth();
  const { showSidebar } = useSidebar();
  const { videos } = useVideos();
  const { likes, dispatchLikes } = useLikes();
  const { watchLater, dispatchWatchLater } = useWatchLater();
  const { history, dispatchHistory } = useHistory();

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

  const addLikeHandler = async () => {
    const addLikeResponse = await addLikeService(auth.token, currentVideo);
    if (addLikeResponse !== undefined) {
      dispatchLikes({ type: SET_LIKES, payload: addLikeResponse });
    }
  };

  const removeLikeHandler = async () => {
    const removeLikeResponse = await removeLikeService(auth.token, videoId);
    if (removeLikeResponse !== undefined) {
      dispatchLikes({ type: SET_LIKES, payload: removeLikeResponse });
    }
  };

  const addWatchLaterHandler = async () => {
    const addWatchLaterResponse = await addWatchLaterService(
      auth.token,
      currentVideo
    );
    if (addWatchLaterResponse !== undefined) {
      dispatchWatchLater({
        type: SET_WATCH_LATER,
        payload: addWatchLaterResponse,
      });
    }
  };

  const removeWatchLaterHandler = async () => {
    const removeWatchLaterResponse = await removeWatchLaterService(
      auth.token,
      videoId
    );
    if (removeWatchLaterResponse !== undefined) {
      dispatchWatchLater({
        type: SET_WATCH_LATER,
        payload: removeWatchLaterResponse,
      });
    }
  };

  const removeHistoryHandler = async () => {
    const removeHistoryResponse = await removeHistoryService(
      auth.token,
      videoId
    );
    if (removeHistoryResponse !== undefined) {
      dispatchHistory({ type: SET_HISTORY, payload: removeHistoryResponse });
    }
  };

  const addHistoryHandler = async () => {
    if (history.find((historyVideo) => historyVideo._id === videoId)) {
      removeHistoryHandler();
    }
    const addHistoryResponse = await addHistoryService(
      auth.token,
      currentVideo
    );
    if (addHistoryResponse !== undefined) {
      dispatchHistory({ type: SET_HISTORY, payload: addHistoryResponse });
    }
  };

  const addPlaylistHandler = () => {
    setShowPlaylistsModal(true);
  };

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
            playing
            onStart={() => auth.status && addHistoryHandler()}
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
              {likes?.find((like) => like._id === videoId) ? (
                <button
                  className="video-action-button"
                  onClick={removeLikeHandler}
                >
                  <span
                    className="material-icons video-icon"
                    title="I like this"
                  >
                    thumb_up
                  </span>
                </button>
              ) : (
                <button
                  className="video-action-button"
                  onClick={() =>
                    auth.status
                      ? addLikeHandler()
                      : navigate("/signin", { state: { from: location } })
                  }
                >
                  <span
                    className="material-icons-outlined video-icon"
                    title="I like this"
                  >
                    thumb_up
                  </span>
                </button>
              )}
              {watchLater?.find(
                (watchLaterVideo) => watchLaterVideo._id === videoId
              ) ? (
                <button
                  className="video-action-button"
                  onClick={removeWatchLaterHandler}
                >
                  <span
                    className="material-icons video-icon"
                    title="I will watch this later"
                  >
                    watch_later
                  </span>
                </button>
              ) : (
                <button
                  className="video-action-button"
                  onClick={() =>
                    auth.status
                      ? addWatchLaterHandler()
                      : navigate("/signin", { state: { from: location } })
                  }
                >
                  <span
                    className="material-icons-outlined video-icon"
                    title="I will watch this later"
                  >
                    watch_later
                  </span>
                </button>
              )}
              <button
                className="video-action-button"
                onClick={() =>
                  auth.status
                    ? addPlaylistHandler()
                    : navigate("/signin", { state: { from: location } })
                }
              >
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
      {showPlaylistsModal && (
        <PlaylistsModal
          video={currentVideo}
          closePlaylistModal={() => setShowPlaylistsModal(false)}
        />
      )}
    </div>
  );
};
