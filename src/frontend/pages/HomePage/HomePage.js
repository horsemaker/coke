import React from "react";
import { Banner, ImageCarousel } from "../../components";
import { homeCarousel, homeBanners } from "../../data";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page-carousel">
        <ImageCarousel images={homeCarousel} />
      </section>
      <section className="home-page-banners">
        {homeBanners.map((banner, bannerIndex) => (
          <Banner banner={{ ...banner, bannerIndex }} />
        ))}
      </section>
    </div>
  );
};
