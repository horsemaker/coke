import React from "react";
import { useLocation } from "react-router-dom";
import { ExpandedSidebar, ShrinkedSidebar } from "../../components";
import { useSidebar } from "../../contexts";
import { useWindowSize } from "../../hooks";
import "./Sidebar.css";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarForbiddenPaths = ["/signin", "/signup"];
  const { showSidebar } = useSidebar();

  const windowSize = useWindowSize();

  return (
    !sidebarForbiddenPaths.includes(pathname) &&
    (showSidebar ? (
      <div className="sidebar">
        <ExpandedSidebar />
      </div>
    ) : (
      windowSize.width > 950 && (
        <div className="sidebar">
          <ShrinkedSidebar />
        </div>
      )
    ))
  );
};
