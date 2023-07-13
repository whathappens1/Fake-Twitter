/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function index() {
  const { i18n } = useTranslation();

  return (
    <HelmetProvider>
        <Helmet>
          <title>
            {i18n.language === "ar"
              ? "برنامج الـ React"
              : "React App"}
          </title>
          <meta
            name="description"
            content="your description"
          />
        </Helmet>
      <div>
        <Navigate to="/Home" replace={true} />
      </div>
    </HelmetProvider>
  );
}

export default index;
