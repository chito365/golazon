import { ReactNode, StrictMode } from "react";
import Head from "next/head";
import GoogleAdSenseScript from "./GoogleAdSenseScript"; // Adjust the path

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

export default function Layout({ title, header, children }: Props) {
  return (
    <div>
      <Head>
        {/* ... (existing Head content) */}
        <meta name="description" content="Your website description" />
        <meta name="keywords" content="your,keywords,here" />
        {/* Add other necessary meta tags */}

        <GoogleAdSenseScript />
        <title>{title}</title>
      </Head>

      <div id="app">
        <StrictMode>
          {/* Remove the unused SiteHead component */}
          
          {header && (
            <div className="container block">
              <h1>{header}</h1>
            </div>
          )}

          {children}
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
