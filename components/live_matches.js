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
        <div className="live-matches__container">
          <h2>No live matches at the moment</h2>
        </div>
      </div>
    );
  }

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
      ""
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
      ""
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
      ""
    ]
    // Add more data rows as needed
  ];

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
            <div className="live-match__header">
              <div>Date/Time</div>
              <div></div>
              <div>Team 1</div>
              <div>Match</div>
              <div>Score</div>
              <div>Team 2</div>
              <div>Outcome</div>
              <div>Odds</div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            {additionalFootballData.map((rowData, index) => (
              <div key={index} className="live-match__row">
                {rowData.map((data, dataIndex) => (
                  <div key={dataIndex} className="live-match__data">
                    {data}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
