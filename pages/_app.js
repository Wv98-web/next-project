import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/style.scss';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nextjs服务器渲染</title>
      </Head>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
