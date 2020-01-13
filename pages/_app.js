import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import '@styles/home.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <title>This is a default title</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
};

export default MyApp;