// components/Layout.js

import { ReactNode, StrictMode } from "react";
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
  [
    "11/29 00:15",
    "",
    "CA Torque",
    "CA Torque - Deportivo Maldon",
    "5-1",
    "Deportivo Maldon",
    "Under 2.5",
    "1.83",
    "",
    "",
    "",
  ],
  [
    "11/29 00:30",
    "",
    "Vasco da Gama",
    "Vasco da Gama - Corinthians",
    "2-4",
    "Corinthians",
    "Over 2.5",
    "2.56",
    "",
    "",
    "",
  ],
  // Add more data rows as needed
];

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
            href="/AI"
            target="_blank"
            rel="noreferrer"
          >
            AI
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
          <div className="live-matches__container">
            <h2>Additional Football Data</h2>
            <table className="live-match__table">
              <thead>
                <tr>
                  <th>Date/Time</th>
                  <th></th>
                  <th>Team 1</th>
                  <th>Match</th>
                  <th>Score</th>
                  <th>Team 2</th>
                  <th>Outcome</th>
                  <th>Odds</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {additionalFootballData.map((rowData, index) => (
                  <tr key={index} className="live-match__row">
                    {rowData.map((data, dataIndex) => (
                      <td key={dataIndex} className="live-match__data">
                        {data}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
