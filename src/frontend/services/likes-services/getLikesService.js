import axios from "axios";

export const getLikesService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    return data.likes;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
