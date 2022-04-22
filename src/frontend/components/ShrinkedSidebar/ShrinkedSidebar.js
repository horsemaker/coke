import React from "react";
import { NavLink } from "react-router-dom";
import { usePlaylists } from "../../contexts";
import "./ShrinkedSidebar.css";

export const ShrinkedSidebar = () => {
  const { playlists } = usePlaylists();

  return (
    <div className="shrinked-sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link active-link"
            : "shrinked-sidebar-link"
        }
      >
        <span title="Home" className="material-icons-outlined sidebar-icon">
          home
        </span>
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link search-link active-link"
            : "shrinked-sidebar-link search-link"
        }
      >
        <span title="Search" className="material-icons-outlined sidebar-icon">
          search
        </span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link active-link"
            : "shrinked-sidebar-link"
        }
      >
        <span title="Explore" className="material-icons-outlined sidebar-icon">
          explore
        </span>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link active-link"
            : "shrinked-sidebar-link"
        }
      >
        <span title="History" className="material-icons-outlined sidebar-icon">
          history
        </span>
      </NavLink>
      <NavLink
        to="/watchlater"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link active-link"
            : "shrinked-sidebar-link"
        }
      >
        <span
          title="Watch Later"
          className="material-icons-outlined sidebar-icon"
        >
          watch_later
        </span>
      </NavLink>
      <NavLink
        to="/likes"
        className={({ isActive }) =>
          isActive
            ? "shrinked-sidebar-link active-link"
            : "shrinked-sidebar-link"
        }
      >
        <span
          title="Liked Videos"
          className="material-icons-outlined sidebar-icon"
        >
          thumb_up
        </span>
      </NavLink>
      {playlists.map((playlist) => (
        <NavLink
          key={playlist._id}
          to={`/playlists/${playlist._id}`}
          className={({ isActive }) =>
            isActive
              ? "shrinked-sidebar-link active-link"
              : "shrinked-sidebar-link"
          }
        >
          <span title={playlist.title} className="material-icons sidebar-icon">
            playlist_play
          </span>
        </NavLink>
      ))}

      <span className="material-icons-outlined shrinked-sidebar-link sidebar-icon">
        settings
      </span>
    </div>
  );
};
