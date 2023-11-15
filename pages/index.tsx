import Layout from "components/Layout";
import LiveMatches from "components/live_matches";
import { MAX_CACHE_TIME } from "common/config";

export async function getStaticProps() {
  // Fetch data from the external API
  const response = await fetch("https://betadvisor.club/data/dta/b/r2.php");
  const data = await response.json();

  // Return the fetched data as props, along with revalidation time
  return { props: { betAdvisorData: data }, revalidate: MAX_CACHE_TIME };
}

export default function IndexPage({ betAdvisorData }) {
  return (
    <Layout title={null}>
      <LiveMatches />
      {/* Display the fetched data before the footer */}
      <div>
        {/* Adjust this part based on the structure of the fetched data */}
        {betAdvisorData && betAdvisorData.someProperty && (
          <p>{betAdvisorData.someProperty}</p>
        )}
      </div>
      {/* Rest of your content, including the footer */}
    </Layout>
  );
}
