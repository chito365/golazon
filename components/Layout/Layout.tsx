// components/Layout.js

import { ReactNode, StrictMode, useState, useEffect } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript"; // Adjust the path

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

export default function Layout({ title, header, children }: Props) {
  const [externalContent, setExternalContent] = useState<string | null>(null);

  useEffect(() => {
    // Fetch external content when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("https://betadvisor.club/data/dta/b/r2.php");
        const data = await response.text();
        setExternalContent(data);
      } catch (error) {
        console.error("Error fetching external content:", error);
      }
    };

    fetchData();
  }, []);

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

          {children}

          {externalContent && (
            <div className="external-content container">
              {/* Render the fetched external content */}
              <div dangerouslySetInnerHTML={{ __html: externalContent }} />
            </div>
          )}
        </StrictMode>
        <p className="footer container">
          Foregoal Free Predictions
        </p>
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
