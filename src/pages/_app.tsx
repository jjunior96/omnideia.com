import { AppProps } from 'next/app';
import Head from 'next/head';

import AppProvider from 'hooks';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Omnideia</title>
        <link rel="shorcut icon" href="/img/bg.png" />
        <link rel="apple-touch-icon" href="/img/bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Omnideia" />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
