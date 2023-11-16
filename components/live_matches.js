import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Fixtures, Loader } from 'components/Layout';
import { useResource, resourcePatterns } from 'common/hyena';
import groupFixturesByCompetitionId from 'common/util/groupFixturesByCompetitionId';
import axios from 'axios';

export default function LiveMatches() {
  const { data: liveMatches, loading } = useResource(() =>
    resourcePatterns.liveMatches()
  );

  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://betadvisor.club/data/dta/b/data.json'
        );
        const data = response.data;

        // Check if the "Odds" column is missing or empty
        const filteredData = data.filter((row) => !!row[7]);

        setAdditionalData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
        </div>
      ))}

      {/* Display additional data at the end of Fixtures */}
      <div id="dataContainer" className="block">
        {additionalData.map((row, index) => (
          <div key={index}>
            <p>Date: {row[0]}</p>
            <p>Match: {row[3]}</p>
            <p>Score: {row[4]}</p>
            <p>Bet Type: {row[6]}</p>
            <p>Odds: {row[7]}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
