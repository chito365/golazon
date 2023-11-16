// components/Layout.js

import { ReactNode, StrictMode, useEffect, useState } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript"; // Adjust the path

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

type FooterData = {
  content: string;
};

export default function Layout({ title, header, children }: Props) {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchData = async () => {
      try {
        const response = await fetch("https://betadvisor.club/data/dta/b/data.json");
        const data = await response.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  return (
    <div>
      <Head>
        {/* Meta tags, title, and link elements */}
        {/* Google AdSense script */}
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
        </StrictMode>

        {/* Display footer with dynamic content */}
        <p className="footer container">
          {footerData ? footerData.content : "Loading..."}
        </p>

        <p className="footer container">
          <a href="/developer/">data api</a> •{" "}
          <a href="https://betadvisor.club" target="_blank" rel="noreferrer">
            Become a Tipster (get paid)
          </a>
        </p>
      </div>
    </div>
  );
}
