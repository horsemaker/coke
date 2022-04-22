import React, { useRef, useState } from "react";
import { SET_PLAYLIST, SET_PLAYLISTS } from "../../constants";
import { useAuth, usePlaylists } from "../../contexts";
import { useOnClickOutside } from "../../hooks";
import {
  addPlaylistService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
} from "../../services";
import "./PlaylistsModal.css";

export const PlaylistsModal = ({ video, closePlaylistModal }) => {
  const modalRef = useRef();
  const [showNewPlaylistForm, setShowNewPlaylistForm] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });

  useOnClickOutside(modalRef, () => {
    setNewPlaylist({ title: "", description: "" });
    closePlaylistModal();
  });

  const { auth } = useAuth();
  const { playlists, dispatchPlaylists } = usePlaylists();

  const addPlaylistHandler = async () => {
    const addPlaylistResponse = await addPlaylistService(
      auth.token,
      newPlaylist
    );
    if (addPlaylistResponse !== undefined) {
      dispatchPlaylists({ type: SET_PLAYLISTS, payload: addPlaylistResponse });
      setNewPlaylist({ title: "", description: "" });
    }
  };

  const addVideoToPlaylistHandler = async (playlistId) => {
    const addVideoToPlaylistResponse = await addVideoToPlaylistService(
      auth.token,
      playlistId,
      video
    );
    if (addVideoToPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: addVideoToPlaylistResponse,
      });
    }
  };

  const removeVideoFromPlaylistHandler = async (playlistId) => {
    const removeVideoFromPlaylistResponse =
      await removeVideoFromPlaylistService(auth.token, playlistId, video._id);

    if (removeVideoFromPlaylistResponse !== undefined) {
      dispatchPlaylists({
        type: SET_PLAYLIST,
        payload: removeVideoFromPlaylistResponse,
      });
    }
  };

  return (
    <div className="playlists-modal" onClick={(e) => e.stopPropagation()}>
      <div ref={modalRef} className="playlists-modal-container">
        <div className="playlists-modal-conatiner-primary">
          <h3 className="playlists-modal-conatiner-title">Save to...</h3>
          <button
            className="playlists-modal-conatiner-close"
            onClick={closePlaylistModal}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="playlists-modal-conatiner-options">
          {playlists.map((playlist) => (
            <div
              key={playlist._id}
              className="playlists-modal-conatiner-option input-group input-checkbox"
            >
              <input
                className="coke-input"
                type="checkbox"
                name="playlist-options"
                id={playlist._id}
                checked={
                  playlist.videos.find(
                    (playlistVideo) => playlistVideo._id === video._id
                  )
                    ? true
                    : false
                }
                onChange={(e) =>
                  e.target.checked
                    ? addVideoToPlaylistHandler(playlist._id)
                    : removeVideoFromPlaylistHandler(playlist._id)
                }
              />
              <label
                className="playlists-modal-conatiner-option-label"
                htmlFor={playlist._id}
              >
                {playlist.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          {showNewPlaylistForm ? (
            <form
              className="playlists-modal-conatiner-actions"
              onSubmit={(e) => {
                e.preventDefault();
                addPlaylistHandler();
              }}
            >
              <div className="input-group input-text">
                <label htmlFor="title">Title</label>
                <input
                  className="input"
                  type="text"
                  name="new-playlist"
                  id="title"
                  placeholder="foo"
                  required
                  value={newPlaylist.title}
                  onChange={(e) =>
                    setNewPlaylist({ ...newPlaylist, title: e.target.value })
                  }
                />
              </div>
              <div className="input-group input-textarea">
                <label htmlFor="description">Description</label>
                <textarea
                  className="textarea"
                  name="new-playlidt"
                  id="description"
                  cols="30"
                  rows="2"
                  placeholder="bar bar bar"
                  required
                  value={newPlaylist.description}
                  onChange={(e) =>
                    setNewPlaylist({
                      ...newPlaylist,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </form>
          ) : (
            <button
              className="btn btn-primary btn-auth"
              onClick={() => setShowNewPlaylistForm(true)}
            >
              Create new Playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
