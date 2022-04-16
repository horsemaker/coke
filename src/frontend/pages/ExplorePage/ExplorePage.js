import React from "react";
import { Categories, VerticalVideoCard } from "../../components";
import { useVideos } from "../../contexts";
import "./ExplorePage.css";

export const ExplorePage = () => {
  const { videos } = useVideos();

  return (
    <div className="explore-page">
      <section className="categories-section">
        <Categories />
      </section>
      <section className="videos-section">
        {videos.map((video) => (
          <VerticalVideoCard key={video._id} video={video} />
        ))}
      </section>
    </div>
  );
};
