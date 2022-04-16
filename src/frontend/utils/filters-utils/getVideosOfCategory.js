export const getVideosOfCategory = (videos, category) => {
  if (category === "All") return videos;
  return videos.filter((video) => video.categoryName === category);
};
