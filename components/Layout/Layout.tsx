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
    // Fetch data from the local API route
    fetch("/api/predictions")
      .then((response) => response.text())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div>
      <Head>
        {/* ... (unchanged) */}
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

          <StrictMode>
            {/* Display title and fetched data as HTML table */}
            {data && (
              <div>
                <h2>Free Predictions</h2>
                <table dangerouslySetInnerHTML={{ __html: data }} />
              </div>
            )}
          </StrictMode>

          {children}
        </StrictMode>

        <p className="footer container">
          <a href="/developer/">data api</a>
          {" • "}
          <a
            href="https://betadvisor.club"
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
