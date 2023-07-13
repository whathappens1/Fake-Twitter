// @ts-nocheck
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getDesignTokens from "../context/customTheme";
import { Typography, Stack } from "@mui/material";

function Root() {
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header {...{ setMode }} />
        <Stack direction="row">
          <Sidebar {...{ setMode }} />
          <Typography
            variant="body2"
            className="border"
            sx={{ flexGrow: "3", height: "1111px" }}
          >
            Box 2
          </Typography>
          <Typography variant="body2" className="border" sx={{ flexGrow: "1" }}>
            Box 3
          </Typography>
        </Stack>
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Root;
