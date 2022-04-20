import axios from "axios";

export const removeWatchLaterService = async (token, videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error);
    return;
  }
};
