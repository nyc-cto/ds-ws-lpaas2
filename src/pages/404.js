/* eslint-disable react/jsx-filename-extension */

// DO NOT EDIT OR DELETE THIS FILE
// DO NOT EDIT OR DELETE THIS FILE
// DO NOT EDIT OR DELETE THIS FILE

import React, { useEffect } from 'react';

import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Layout from '../components/layout';


function Page404() {
  const { i18n } = useTranslation();

  useEffect(() => {
    navigate(`/${i18n.language}/404`);
  }, []);

  return <Layout languageList={[]} />; // for routing in layout component
}

export default Page404;
