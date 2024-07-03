import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout({ subtitle, children }) {
  return (
    <div className="container">
      <Head>
        <title>Netlify Durable Cache with Next.js - {subtitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Demo: Netlify Durable Cache with Next.js" />
        {children}
      </main>

      <Footer />
    </div>
  );
}
