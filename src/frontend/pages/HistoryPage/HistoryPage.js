import React from "react";
import { EmptyStatePage } from "../EmptyStatePage/EmptyStatePage";
import { useAuth, useHistory } from "../../contexts";
import "./HistoryPage.css";
import { BigHorizontalVideoCard } from "../../components";
import { removeAllHistoryService } from "../../services";
import { SET_HISTORY } from "../../constants";

export const HistoryPage = () => {
  const { history, dispatchHistory } = useHistory();
  const { auth } = useAuth();

  const removeAllHistoryHandler = async () => {
    const removeAllHistoryResponse = await removeAllHistoryService(auth.token);
    if (removeAllHistoryResponse !== undefined) {
      dispatchHistory({ type: SET_HISTORY, payload: removeAllHistoryResponse });
    }
  };

  return history.length === 0 ? (
    <EmptyStatePage />
  ) : (
    <div className="user-property-page">
      <div className="user-property-page-cover">
        <div className="user-property-page-cover-media">
          <img
            className="user-property-page-cover-img"
            src={`https://img.youtube.com/vi/${history[0]._id}/maxresdefault.jpg`}
            alt="Watch Later Videos"
          />
          <div className="user-property-page-cover-title">
            <span class="material-icons">history</span>
            <span>History</span>
          </div>
        </div>
        <button
          className="btn btn-primary user-property-page-cover-action"
          onClick={removeAllHistoryHandler}
        >
          Clear All
        </button>
      </div>
      <div className="user-property-page-videos">
        {history.map((historyVideo) => (
          <BigHorizontalVideoCard key={historyVideo._id} video={historyVideo} />
        ))}
      </div>
    </div>
  );
};
