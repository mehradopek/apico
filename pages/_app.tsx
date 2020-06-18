import { AppProps } from 'next/app';
import '../styles/index.scss';
import Head from 'next/head';
import strings from '../strings/fa.json';
export function reportWebVitals(metric: any) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{strings.APP_NAME}</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link
          rel='stylesheet'
          href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
        />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
