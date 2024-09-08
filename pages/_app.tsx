// pages/_app.tsx
import { AppProps } from 'next/app';
import MainLayout from '../layout/Main';
import { NextPageWithLayout } from '../types.d';
import '../styles/globals.css';
import LoginLayout from 'layout/Login';
import ForgotPasswordLayout from 'layout/ForgotPassword';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
