import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Fixtures, Loader } from 'components/Layout';
import { useResource, resourcePatterns } from 'common/hyena';
import groupFixturesByCompetitionId from 'common/util/groupFixturesByCompetitionId';

export default function LiveMatches() {
  const { data: liveMatches, loading } = useResource(() =>
    resourcePatterns.liveMatches()
  );

  const [additionalData, setAdditionalData] = useState([]);
  const [additionalDataLoading, setAdditionalDataLoading] = useState(true);

  useEffect(() => {
    // Fetch additional data on component mount
    fetchAdditionalData();
  }, []);

  const fetchAdditionalData = () => {
    fetch('https://betadvisor.club/data/dta/b/data.json')
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter(
          row =>
            parseFloat(row[7]) >= 2.00 &&
            parseFloat(row[7]) <= 2.60 &&
            row[6] === 'Over2.5'
        );
        setAdditionalData(filteredData);
        setAdditionalDataLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setAdditionalDataLoading(false);
      });
  };

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
      {groupedMatches.map(item => (
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
        </div>
      ))}

      {/* Table for additional data */}
      {additionalDataLoading ? (
        <p>Loading additional data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Kick-off</th>
              <th>Teams</th>
              <th>Tip</th>
              <th>Odds</th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {additionalData.map(row => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[3]}</td>
                <td>{row[6]}</td>
                <td>{row[7]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
