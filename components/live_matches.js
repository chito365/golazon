import { useState, useEffect } from "react";
import Link from "next/link";
import { Fixtures, Loader } from "components/Layout";
import { useResource, resourcePatterns } from "common/hyena";
import groupFixturesByCompetitionId from "common/util/groupFixturesByCompetitionId";

export default function LiveMatches() {
  const { data: liveMatches, loading } = useResource(() =>
    resourcePatterns.liveMatches()
  );

  // State to store additional football data
  const [additionalFootballData, setAdditionalFootballData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://betadvisor.club/data/dta/b/data.json"
        );
        const jsonData = await response.json();

        // Assuming jsonData is an array
        setAdditionalFootballData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
        <div className="live-matches__container">
          <h2>No live matches at the moment</h2>
        </div>
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
        </div>
      ))}
    </div>
  );
}
