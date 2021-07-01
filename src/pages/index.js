import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import Layout from "../components/layout";
import i18next from "../components/i18n";

import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

function Home() {
  return (
    <Suspense fallback="loading">
      <I18nextProvider i18n={i18next}>
        <Layout>
          {/* TODO: temporary placeholder */}
          <div>
            The U.S. government, including the U.S. General Services
            Administration (the primary sponsoring federal agency of USA.gov),
            neither endorses nor guarantees in any way the external
            organizations, services, advice, or products included in these
            website links. Furthermore, the U.S. government neither controls nor
            guarantees the accuracy, relevance, timeliness or completeness of
            the information contained in non-government website links.
          </div>
        </Layout>
      </I18nextProvider>
    </Suspense>
  );
}

export default Home;
