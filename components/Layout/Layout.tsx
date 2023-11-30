// components/live_matches.js

import { useEffect, useState } from 'react';

const LiveMatches = () => {
  const [additionalFootballData, setAdditionalFootballData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/footballData'); // Use a serverless function to fetch data
        const data = await response.json();
        setAdditionalFootballData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render your component using additionalFootballData */}
    </div>
  );
};

export default LiveMatches;
