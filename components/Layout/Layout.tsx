// components/Layout.js

import { ReactNode, StrictMode, useEffect, useState } from "react";
import Head from "next/head";
import SiteHead from "./SiteHead";
import GoogleAdSenseScript from "./GoogleAdSenseScript";
import axios from "axios"; // Import axios

type Props = {
  title: string | false;
  header?: string | ReactNode;
  children?: ReactNode;
};

export default function Layout({ title, header, children }: Props) {
  const [additionalFootballData, setAdditionalFootballData] = useState([]);

  useEffect(() => {
    // Fetch data from the external link
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://betadvisor.club/data/dta/b/data.json"
        );
        // Set the fetched data to the state
        setAdditionalFootballData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <Head>
        {/* ... (existing head content) ... */}
      </Head>

      {/* ... (other content) ... */}

      {/* Additional Football Data */}
      <div className="container block">
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

      {/* ... (other content) ... */}
    </div>
  );
}
