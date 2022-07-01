import React from "react";
import { Link } from "react-router-dom";
import { EMPTY_STATE } from "../../constants";
import "./EmptyStatePage.css";

export const EmptyStatePage = () => {
  return (
    <div className="empty-state-page">
      <div className="empty-state-page-content">
        <h2 className="empty-state-page-title">Seems Empty :(</h2>
        <img className="empty-state-page-img" src={EMPTY_STATE} alt="Empty!" />
        <Link className="btn btn-primary" to="/">Explore Now!</Link>
      </div>
    </div>
  );
};
