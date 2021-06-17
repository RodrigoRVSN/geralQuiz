import "../ui/styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/components/Header/Header";
import Footer from "ui/components/Footer/Footer";
import { AppContainer } from "ui/styles/pages/_app.style";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Geral Quiz | Your quiz ❤️</title>
        <meta name="description" content="Geral quiz to test your knowledges" />
        <link rel="icon" href="/brain.jpg" />
      </Head>

      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />

          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
