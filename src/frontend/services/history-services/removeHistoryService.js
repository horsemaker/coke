import axios from "axios";

export const removeHistoryService = async (token, videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/history/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return data.history;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
