import React, { useEffect } from 'react';

import { Redirect, Router } from '@reach/router';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import i18next from '../components/i18n';

function NotFound() {
  const { i18n } = useTranslation();
  useEffect(() => {
    navigate(`/${i18n.language}/404`);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <></>
    // // <Router>
    // //   <Redirect from="/" to={`/${i18n.language}/404`} noThrow />
    // // </Router>
  );
}

export default NotFound;
