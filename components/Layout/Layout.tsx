// components/Layout.js

import { ReactNode, StrictMode } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript"; // Adjust the path
import LiveMatches from "./live_matches"; // Import the new component

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

export default function Layout({ title, header, children }: Props) {
  return (
    <div>
      <Head>
        {/* ... (existing head content) ... */}
      </Head>

      <div id="app">
        <p className="footer container">Foregoal Free Predictions</p>
        <p className="footer container">
          <a href="/free/">Free</a> {" • "}
          <a
            href="https://www.pickskenya.online/"
            target="_blank"
            rel="noreferrer"
          >
            VIP
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
          <div className="container block">
            <h2>Additional Football Data</h2>
            {/* Use the new LiveMatches component */}
            <LiveMatches />
          </div>
        </StrictMode>

        <p className="footer container">Foregoal Free Predictions</p>
        <p className="footer container">
          <a href="/developer/">data api</a> {" • "}
          <a
            href="https://www.pickskenya.online/want-to-get-paid-as-tipster/"
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
