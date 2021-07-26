import React, { useEffect } from 'react';

// import { Redirect, Router } from "@reach/router";
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    navigate(`/${i18n.language}/`);
  }, []);

  return <></>;
}

export default Home;
