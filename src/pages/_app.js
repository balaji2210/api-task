import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../components/navBar/NavBar";

const paths = ["/"];
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      />
      <Script src="js/jquery-1.7.1.min.js" />
      <Script src="js/bootstrap.js" />
      {!paths?.includes(router?.pathname) ? <NavBar /> : null}
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
