import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import Header from "../components/Header";
import i18next from "../components/i18n";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function Home() {
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18next}>
        <Header />
      </I18nextProvider>
    </Suspense>
  );
}

export default Home;
