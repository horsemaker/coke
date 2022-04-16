import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CategoriesProvider,
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
              <CategoriesProvider>{children}</CategoriesProvider>
            </VideosProvider>
          </SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
