import { createContext, useContext, useState, useEffect } from "react";
import { getVideos } from "../services";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const getVideosResponse = await getVideos();
      if (getVideosResponse !== undefined) {
        setVideos(getVideosResponse);
      }
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => {
  const context = useContext(VideosContext);

  if (context === undefined) {
    throw new Error("useVideos must be used within a VideosProvider");
  }

  return context;
};

export { VideosProvider, useVideos };
