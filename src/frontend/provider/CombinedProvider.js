import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoriesProvider,
  FiltersProvider,
  SidebarProvider,
  ThemeProvider,
  VideosProvider,
} from "../contexts";

export const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <SidebarProvider>
            <VideosProvider>
              <CategoriesProvider>
                <FiltersProvider>{children}</FiltersProvider>
              </CategoriesProvider>
            </VideosProvider>
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
