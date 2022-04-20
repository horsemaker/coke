import axios from "axios";

export const removeVideoFromPlaylistService = async (
  token,
  playlistId,
  videoId
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`
    );
    return data.playlist;
  } catch (error) {
    console.log(error.message);
    return;
  }
};
