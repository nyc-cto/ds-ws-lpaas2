import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ScriptTag from 'react-script-tag';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Header from './header';
import Footer from './footer';

function Layout({ children, slug }) {
  const { t, i18n } = useTranslation();
  const [pageTitle, setPageTitle] = useState(t('title')); // initial title is home page title
  const [endpoint, setEndpoint] = useState();

  useEffect(() => {
    async function fetchEndpoint() {
      const result = await fetch(`${process.env.GATSBY_ENDPOINT}`)
        // .then((res) => res.json())
        .then((res) => {
          console.log(res);
          console.log(res.json());
          console.log(process.env);
          console.log(process.env.GATSBY_ENDPOINT);
          console.log(process.env.ENDPOINT);
        });
      const result2 = await fetch(`${process.env.ENDPOINT}`)
        // .then((res) => res.json())
        .then((res) => {
          console.log(res);
          console.log(res.json());
          console.log(process.env);
          console.log(process.env.GATSBY_ENDPOINT);
          console.log(process.env.ENDPOINT);
        });

      console.log('ENV', process.env.GATSBY_ENDPOINT, result.data);
      console.log('ENV', process.env.ENDPOINT, result2.data);
      setEndpoint(result);
    }
    fetchEndpoint();
  }, []);

  console.log(endpoint);
  console.log(process.env);
  console.log(process.env.GATSBY_ENDPOINT);
  console.log(process.env.ENDPOINT);

  return (
    <>
      <Header slug={slug} />
      <Helmet onChangeClientState={(newState) => setPageTitle(newState.title)} />
      <div className="#top" />
      {children}
      <div id="feedback-widget" lang={i18n.language} pageTitle={pageTitle} endpoint="1" />
      {/* TODO: need to update endpoint to not be hard-coded */}
      <ScriptTag src="https://d2ttz3as5y3dj0.cloudfront.net/feedback-module.min.js" type="text/javascript" />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Layout;
