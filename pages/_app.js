import "@styles/globals.css";

import Layout from "@components/Layout";

function Application({ Component, pageProps }) {
  return (
    <Layout subtitle={Component.subtitle}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
