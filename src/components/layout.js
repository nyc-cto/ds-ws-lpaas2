import React from "react";
// import { Footer, Header } from "./index";
import Footer from "../components/footer";
import Header from "../components/header";

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
