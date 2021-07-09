import React from "react";
import { useTranslation } from "react-i18next";
// import { Layout, i18next } from "../../components";
import Layout from "../../components/layout";
import i18next from "../../components/i18n";

function NotFound() {
  const { t } = useTranslation();
  return <Layout slug="404">{t("notFound")}</Layout>;
}

export default NotFound;
