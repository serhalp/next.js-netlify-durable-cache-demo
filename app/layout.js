import "@styles/globals.css";

import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
  title: "Demo: Netlify Durable Cache with Next.js",
  description: "A demo of Netlify Durable Cache with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <main>
            <Header title="Demo: Netlify Durable Cache with Next.js" />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
