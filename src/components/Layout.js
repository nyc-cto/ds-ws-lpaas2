import React from "react";
import { Footer, Header } from ".";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
