import { Box } from "@mui/material";
import LiveMatches from "../../components/Match/LiveMatches";
import MatchesNav from "../../components/Match/MatchesNav";
import Loader from "../../components/Loader";
import { useState, useEffect } from "react";

const Match = ({ livescoreApiKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": livescoreApiKey,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    fetch(
      "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ width: "100%", pb: 2 }}>
      <MatchesNav />
      <LiveMatches data={data} />
    </Box>
  );
};

export default Match;

export const getServerSideProps = async () => {
  return {
    props: {
      livescoreApiKey: process.env.LIVESCORE,
    },
  };
};
