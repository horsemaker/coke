const giveSeason14 = () => {
  const season14Carousel = [];

  for (let i = 1; i <= 13; i++) {
    season14Carousel.push(
      `/assets/Home/carousels/season-14/carousel-${i <= 9 ? `0${i}` : i}.jpg`
    );
  }

  return season14Carousel;
};

export const homeCarousel = giveSeason14();
