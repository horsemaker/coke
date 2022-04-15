import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  COKE_AUTH_USER_DATA,
  COKE_AUTH_USER_TOKEN,
  LOGO_DARK,
  LOGO_LIGHT,
} from "../../constants";
import { useAuth, useSidebar, useTheme } from "../../contexts";
import { useOnClickOutside, useWindowSize } from "../../hooks";
import "./ExpandedSidebar.css";

export const ExpandedSidebar = () => {
  const expandedSidebarRef = useRef();

  const { theme } = useTheme();
  const { auth, setAuth } = useAuth();
  const { setShowSidebar } = useSidebar();
  const windowSize = useWindowSize();

  useOnClickOutside(expandedSidebarRef, () => {
    if (windowSize.width <= 700) {
      setShowSidebar(false);
    }
  });

  const navigate = useNavigate();

  const linkClickHandler = () => {
    if (windowSize.width <= 700) {
      setShowSidebar(false);
    }
  };

  const signOutHandler = () => {
    localStorage.removeItem(COKE_AUTH_USER_TOKEN);
    localStorage.removeItem(COKE_AUTH_USER_DATA);
    setShowSidebar(false);
    setAuth({
      status: false,
      token: null,
      user: null,
    });
    navigate("/explore");
  };

  return (
    <div ref={expandedSidebarRef} className="expanded-sidebar">
      <header className="sidebar-header">
        <section>
          <button className="nav-menu" onClick={() => setShowSidebar(false)}>
            <span className="material-icons nav-menu-icon">close</span>
          </button>
        </section>
        <section className="nav-brand">
          <NavLink className="nav-brand-link" to="/" onClick={linkClickHandler}>
            <img
              src={theme === "light" ? LOGO_LIGHT : LOGO_DARK}
              className="nav-brand-logo"
              alt="Coke"
            />
          </NavLink>
        </section>
      </header>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">home</span>
        <span className="sidebar-option">Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link search-link active-link"
            : "expanded-sidebar-link search-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">search</span>
        <span className="sidebar-option">Search</span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">explore</span>
        <span className="sidebar-option">Explore</span>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">history</span>
        <span className="sidebar-option">History</span>
      </NavLink>
      <NavLink
        to="/watchlater"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">
          watch_later
        </span>
        <span className="sidebar-option">Watch Later</span>
      </NavLink>
      <NavLink
        to="/likedvideos"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">thumb_up</span>
        <span className="sidebar-option">Liked Videos</span>
      </NavLink>
      <NavLink
        to="/playlists"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
        onClick={linkClickHandler}
      >
        <span className="material-icons-outlined sidebar-icon">
          playlist_play
        </span>
        <span className="sidebar-option">Playlists</span>
      </NavLink>
      <div className="expanded-sidebar-link" onClick={linkClickHandler}>
        <span className="material-icons-outlined sidebar-icon">settings</span>
        <span className="sidebar-option">Settings</span>
      </div>
      {auth.status && (
        <div className="expanded-sidebar-account">
          <div>
            <span className="nav-account-name">Hi, {auth.user.firstName}</span>
            <div className="nav-account-list">
              <span>Account</span>
              <span className="material-icons nav-account-dropdown-icon">
                arrow_drop_up
              </span>
            </div>
          </div>
          <button onClick={signOutHandler}>
            <span className="material-icons-outlined sidebar-icon">logout</span>
          </button>
        </div>
      )}
    </div>
  );
};
