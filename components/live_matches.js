import Link from "next/link";
import { Fixtures, Loader } from "components/Layout";
import { useResource, resourcePatterns } from "common/hyena";
import groupFixturesByCompetitionId from "common/util/groupFixturesByCompetitionId";

export default function LiveMatches() {
  const { data: liveMatches, loading } = useResource(() =>
    resourcePatterns.liveMatches()
  );

  if (!liveMatches && loading) {
    return (
      <div className="home__container container block">
        <Loader noWrapper />
      </div>
    );
  }

  const groupedMatches = liveMatches?.length
    ? groupFixturesByCompetitionId(liveMatches)
    : [];

  if (groupedMatches.length === 0) {
    return (
      <div className="home__container container block">
        No live matches at the moment.
      </div>
    );
  }

  return (
    <div className="home__container container">
      {groupedMatches.map((item) => (
        <div key={item.competition.id}>
          <h2>
            <Link href={`/c/${item.competition.id}`}>
              <a>
                {item.competition.name}
                {item.competition.area_name &&
                  ` (${item.competition.area_name}) `}
                {item.teamtype}
              </a>
            </Link>
          </h2>
          <div className="block">
            <Fixtures fixtures={item.matches} />
          </div>
          {/* Display additional data from the provided JSON source */}
          <div>
            <h3>Additional Data</h3>
            <ul>
              {/* Fetch and display data from the JSON source */}
              {fetchAdditionalData(item.competition.id)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// Function to fetch additional data from the provided JSON source
async function fetchAdditionalData(competitionId) {
  try {
    const response = await fetch(
      `https://betadvisor.club/data/dta/b/data.json`
    );
    const data = await response.json();

    // Extract relevant data based on competitionId
    const competitionData = data[competitionId];

    // Display the extracted data
    return competitionData.map((item, index) => (
      <li key={index}>{/* Display your data here */}</li>
    ));
  } catch (error) {
    console.error("Error fetching additional data:", error);
    return <li>Error fetching additional data</li>;
  }
}
