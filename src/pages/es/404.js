import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "../../components/i18n";

function NotFound() {
  const { t } = useTranslation();
  return <p>{t("notFound")}</p>;
}

export default NotFound;
