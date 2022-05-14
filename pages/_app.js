import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { SessionProvider } from "next-auth/react"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastyProvider } from '../src/contexts/Toasty';
import CheckAuth from '../src/components/CheckAuth'
import theme from '../src/theme';



//export default function App(props) {
//  const { Component, pageProps } = props  

export default function App ({
  Component,
  pageProps: {session, ...pageProps},
}) {  

  return (
    <React.Fragment>
      <Head>
        
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
            <CssBaseline />
            {
              Component.requireAuth
              ? <CheckAuth Component={Component} pageProps={pageProps} />
              : <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};