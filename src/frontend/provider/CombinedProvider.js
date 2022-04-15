import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, SidebarProvider, ThemeProvider } from "../contexts";

export const CombinedProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
