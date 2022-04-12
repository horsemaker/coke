import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Banner.css";

export const Banner = ({ banner }) => {
  const { bannerIndex, title, description, imageUrl } = banner;
  const navigate = useNavigate();

  return (
    <div className="banner">
      <section className="banner-details">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-desc">{description}</p>
        <div className="banner-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/signup")}
          >
            Join Now
          </button>
          <Link to="/signin" className="link">
            Already have an account?
          </Link>
        </div>
      </section>
      <section
        style={{ order: bannerIndex % 2 === 0 && -1 }}
        className="banner-img"
      >
        <img
          src={imageUrl}
          title="(Diet) Coke Studio"
          alt="(Diet) Coke Studio"
        />
      </section>
    </div>
  );
};
