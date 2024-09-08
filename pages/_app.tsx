// pages/_app.tsx
import { AppProps } from 'next/app';
import MainLayout from '../layout/Main';
import { NextPageWithLayout } from '../types.d';
import '../styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Default layout is MainLayout
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
