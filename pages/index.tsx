// Import necessary modules
import Layout from "components/Layout";
import LiveMatches from "components/live_matches";
import { MAX_CACHE_TIME } from "common/config";

// Define types for your data
type Match = {
  Date: string;
  Match: string;
  Score: string;
  "Bet Type": string;
  Odds: string;
};

type IndexProps = {
  matches: Match[];
};

// Define the new API URL
const API_URL = "https://betadvisor.club/data/dta/b/data.json";

// Define the getStaticProps function with TypeScript
export async function getStaticProps(): Promise<{ props: IndexProps; revalidate: number }> {
  // Fetch data from the updated API URL
  const response = await fetch(API_URL);
  const data: Match[] = await response.json();

  return { props: { matches: data }, revalidate: MAX_CACHE_TIME };
}

// Define the IndexPage component with TypeScript
const IndexPage: React.FC<IndexProps> = ({ matches }) => {
  return (
    <Layout title={null}>
      <LiveMatches />
      {/* Display the fetched data */}
      <div>
        <h2>Live Matches</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Match</th>
              <th>Score</th>
              <th>Bet Type</th>
              <th>Odds</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => (
              <tr key={index}>
                <td>{match.Date}</td>
                <td>{match.Match}</td>
                <td>{match.Score}</td>
                <td>{match["Bet Type"]}</td>
                <td>{match.Odds}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default IndexPage;
