import { Provider } from 'react-redux';
import { useStore } from '../redux/store';

import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../scss/theme.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
