import Layout from "@/layout/Layout";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@/styles/index.scss"
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
