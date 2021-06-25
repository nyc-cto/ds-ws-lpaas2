import React, { Suspense } from "react";
import Header from "../components/Header";
import "../components/i18n";
import { useTranslation } from "react-i18next";
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <Suspense fallback="loading">
      <div>
        <Header t={t} i18n={i18n} />
      </div>
    </Suspense>
  );
}

export default Home;
