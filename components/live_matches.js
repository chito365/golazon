import Link from "next/link";
import { Fixtures, Loader } from "components/Layout";
import { useResource, resourcePatterns } from "common/hyena";
import groupFixturesByCompetitionId from "common/util/groupFixturesByCompetitionId";
import { useEffect, useState } from "react";

export default function LiveMatches() {
  const { data: liveMatches, loading } = useResource(() =>
    resourcePatterns.liveMatches()
  );

  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://betadvisor.club/data/dta/b/r3.php");
        const htmlData = await response.text();
        setAdditionalData(htmlData);
      } catch (error) {
        console.error("Error fetching additional data:", error);
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
        {additionalData ? (
          // Display additional data fetched from the URL as HTML
          <div dangerouslySetInnerHTML={{ __html: additionalData }} />
        ) : (
          // If additional data is not available yet, you can display a loading message or do nothing
          "No live matches at the moment."
        )}
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
    </div>
  );
}
