import '../styles/globals.scss'
import '../styles/index.scss'
import 'react-quill/dist/quill.snow.css';
import Layout from '../comp/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout >
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
