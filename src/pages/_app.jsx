import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import store from '@/redux/store.js';
import { Header } from '@/components';
import { Sidebar } from '@/composes';
import { AppConfigHost } from '@/hosts';

import '@/styles/globals.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>My daily app</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <meta content="yes" name="mobile-web-app-capable" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#f0ebf4" />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Sidebar />
        <AppConfigHost />
      </Provider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
