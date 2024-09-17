// components/Layout.tsx

import { ReactNode, StrictMode, useEffect } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript"; // Adjust the path

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

const additionalFootballData = [
  [
    "11/29 00:00",
    "",
    "Mexicali",
    "Mexicali - Saltillo",
    "1-0",
    "Saltillo",
    "Under 2.5",
    "1.82",
    "",
    "",
    "",
  ],
  // Add more data rows as needed
];

export default function Layout({ title, header, children }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8692118545628405';
    script.crossOrigin = 'anonymous';
    
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <Head>
        {/* ... (existing head content) ... */}
      </Head>

      <div id="app">
        <p className="footer container">Foregoal - Free Livescore and Predictions</p>
        <p className="footer container">
          <a href="/">Home</a> {" • "}
          <a
            href="/AI"
            target="_blank"
            rel="noreferrer"
          >
            Data analytics predictions
          </a>
        </p>

        <StrictMode>
          <SiteHead />

          {header && (
            <div className="container block">
              <h1>{header}</h1>
            </div>
          )}

          {children}

          {/* Additional Football Data */}
        </StrictMode>

        <p className="footer container">Foregoal - Free Livescore and Predictions</p>
        <p className="footer container">
          <a href="/developer/">data api</a> {" • "}
          <a
            href="h/"
            target="_blank"
            rel="noreferrer"
          >
             (privacy)
          </a>
        </p>
      </div>
    </div>
  );
}
