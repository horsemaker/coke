import React from "react";
import { useHistory } from "../../contexts";
import "./HistoryPage.css";

export const HistoryPage = () => {
  const { history } = useHistory();

  return (
    <div className="history-page">
      {history.map((historyVideo) => historyVideo.title)}
    </div>
  );
};
