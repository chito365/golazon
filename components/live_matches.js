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
        </div>
      ))}

      {/* Table for additional data */}
      <table>
        <thead>
          <tr>
            <th>Kick-off</th>
            <th>Teams</th>
            <th>Tip</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>

      {/* Script to fetch and populate data in the table */}
      <script>
        {`
          fetch('https://betadvisor.club/data/dta/b/data.json')
              .then(response => response.json())
              .then(data => {
                  const tableBody = document.getElementById('tableBody');

                  data.forEach(row => {
                      const odds = parseFloat(row[7]);
                      const tip = row[6];

                      if (odds >= 2.00 && odds <= 2.60 && tip === 'Over2.5') {
                          const tr = document.createElement('tr');
                          tr.innerHTML = \`
                              <td>\${row[0]}</td>
                              <td>\${row[3]}</td>
                              <td>\${row[6]}</td>
                              <td>\${row[7]}</td>
                          \`;
                          tableBody.appendChild(tr);
                      }
                  });
              })
              .catch(error => console.error('Error fetching data:', error));
        `}
      </script>
    </div>
  );
}
