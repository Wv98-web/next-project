import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/style.scss';
import Navbar from '../components/Navbar';
import { Button } from 'antd';

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
        <Navbar />
        <Button type="primary">测试</Button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
