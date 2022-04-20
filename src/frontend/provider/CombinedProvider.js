import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoriesProvider,
  FiltersProvider,
  HistoryProvider,
  LikesProvider,
  PlaylistsProvider,
  SidebarProvider,
  ThemeProvider,
  VideosProvider,
  WatchLaterProvider,
} from "../contexts";

export const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <SidebarProvider>
            <VideosProvider>
              <CategoriesProvider>
                <FiltersProvider>
                  <LikesProvider>
                    <WatchLaterProvider>
                      <HistoryProvider>
                        <PlaylistsProvider>{children}</PlaylistsProvider>
                      </HistoryProvider>
                    </WatchLaterProvider>
                  </LikesProvider>
                </FiltersProvider>
              </CategoriesProvider>
            </VideosProvider>
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
