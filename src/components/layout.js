import React from "react";
import { Footer, Header } from "./index";

function Layout({ children, slug }) {
  return (
    <React.Fragment>
      <Header slug={slug} />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
