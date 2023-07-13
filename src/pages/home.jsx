/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles/home.css";
import { useTranslation } from "react-i18next";
import { Button, useTheme, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";


const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#fff"),
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#eee",
  },
}));

function home() {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <div className={`App ${theme.palette.mode}`}>
        <Helmet>
          <title>
            {i18n.language === "ar" ? "برنامج الـ React" : "React App"}
          </title>
          <meta name="description" content="your description" />
        </Helmet>
        <main id="main">


          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CustomButton
            variant="contained"
            onClick={() => {
              if (i18n.language === "en") {
                i18n.changeLanguage("ar");
              } else {
                i18n.changeLanguage("en");
              }
            }}
          >
            {i18n.language === "ar" ? "تغيير اللغة" : "Change Language"}
          </CustomButton>
        </main>
      </div>
    </>
  );
}

export default home;
