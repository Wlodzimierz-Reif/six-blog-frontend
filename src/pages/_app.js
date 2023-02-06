import { appContext } from "@/context/store";
import Layout from "@/layout/Layout";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@/styles/index.scss"
import "@/styles/globals.scss";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <appContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </appContext.Provider>
  );
}
