import Layout from "components/Layout";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  // Fetch data from the external API
  const res = await fetch("https://betadvisor.club/data/dta/b/r2.php");
  const data = await res.json();

  return {
    props: {
      matches: data, // Pass the fetched data as a prop
    },
    revalidate: 60, // Set revalidation time to 1 minute (adjust as needed)
  };
}

export default function IndexPage({ matches }) {
  return (
    <Layout title={null}>
      <LiveMatches matches={matches} />
      here
    </Layout>
  );
}

// Create a new component for displaying live matches
function LiveMatches({ matches }) {
  return (
    <div>
      <h2>Live Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{match.team1} vs {match.team2}</li>
          // Assuming your data structure has properties like team1, team2, etc.
        ))}
      </ul>
    </div>
  );
}
