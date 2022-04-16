import React from "react";
import { Categories, VerticalVideoCard } from "../../components";
import { useFilters, useVideos } from "../../contexts";
import { fisherYatesShuffler, getVideosOfCategory } from "../../utils";
import "./ExplorePage.css";

export const ExplorePage = () => {
  const { videos } = useVideos();
  const {
    filters: { category },
  } = useFilters();

  const categorizedVideos = getVideosOfCategory(videos, category);
  const finalVideos = fisherYatesShuffler(categorizedVideos);

  return (
    <div className="explore-page">
      <section className="categories-section">
        <Categories />
      </section>
      <section className="videos-section">
        {finalVideos.map((video) => (
          <VerticalVideoCard key={video._id} video={video} />
        ))}
      </section>
    </div>
  );
};
