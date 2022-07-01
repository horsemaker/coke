import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.css";

export const ImageCarousel = ({ images }) => {
  return (
    <Carousel
      interval={4000}
      autoPlay
      infiniteLoop
      emulateTouch
      showStatus={false}
    >
      {images.map((image) => (
        <div key={image}>
          <img src={image} alt={image} />
        </div>
      ))}
    </Carousel>
  );
};
