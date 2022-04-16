import axios from "axios";

export const getVideos = async () => {
  try {
    const { data } = await axios.get("/api/videos");
    return data.videos;
  } catch (error) {
    console.error(error);
    return;
  }
};
