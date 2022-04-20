import axios from "axios";

export const removeLikeService = async (token, videoId) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    return data.likes;
  } catch (error) {
    console.error(error.message);
  }
};
