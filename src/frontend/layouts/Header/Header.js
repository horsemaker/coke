import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts";
import { Search, ThemeToggle } from "../../components";
import { LOGO_DARK, LOGO_LIGHT } from "../../constants";
import "./Header.css";

export const Header = () => {
  const { theme } = useTheme();

  const { pathname } = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        {pathname !== "/" && (
          <section>
            <button className="nav-menu">
              <span className="material-icons nav-menu-icon">menu</span>
            </button>
          </section>
        )}
        <section className="nav-brand">
          <NavLink className="nav-brand-link" to="/">
            <img
              src={theme === "light" ? LOGO_LIGHT : LOGO_DARK}
              className="nav-brand-logo"
              title="(Diet) Coke Studio"
              alt="(Diet) Coke Studio"
            />
          </NavLink>
        </section>
        <section className="nav-search">
          <Search />
        </section>
        <section className="nav-theme-toggle">
          <ThemeToggle />
        </section>
        <section className="nav-authorization">
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">Sign Up</button>
        </section>
      </nav>
    </header>
  );
};
