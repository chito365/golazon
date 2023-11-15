// components/Layout.js

import { ReactNode, StrictMode, useState, useEffect } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript";

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

export default function Layout({ title, header, children }: Props) {
  const [data, setData] = useState("");

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://betadvisor.club/data/dta/b/r2.php")
      .then((response) => response.text())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title || "Foregoal Football Predictions"}</title>

        <meta name="theme-color" content="#ffffff" />

        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-startup-image"
          href="/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <GoogleAdSenseScript />
      </Head>

      <div id="app">
        <StrictMode>
          <SiteHead />

          {header && (
            <div className="container block">
              <h1>{header}</h1>
            </div>
          )}

          {/* Display title and fetched data as HTML table */}
          {data && (
            <div>
              <h2>Free Predictions</h2>
              <table dangerouslySetInnerHTML={{ __html: data }} />
            </div>
          )}

          {children}
        </StrictMode>

        <p className="footer container">
          <a href="/developer/">data api</a>
          {" • "}
          <a
            href="https://beadvisor.club"
            target="_blank"
            rel="noreferrer"
          >
            Become a Tipster (get paid)
          </a>
        </p>
      </div>
    </div>
  );
}
