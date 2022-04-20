import React from "react";
import { useLikes } from "../../contexts";
import "./LikesPage.css";

export const LikesPage = () => {
  const { likes } = useLikes();

  return <div className="likes-page">{likes.map((like) => like.title)}</div>;
};
