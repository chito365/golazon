import { ArrowBack } from "@material-ui/icons";
import { Typography, Box, IconButton, Paper } from "@mui/material";
import { useRouter } from "next/router";
import MatchDetails from "../../components/Match/MatchDetails";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const Match = ({ livescoreApiKey }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
      `https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard?Eid=${router.query.matchId}&Category=soccer`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [router.query.matchId]);

  if (loading || data.length < 2) {
    return <Loader />;
  }

  return (
    <>
      {data && (
        <Box sx={{ width: "100%", maxWidth: "800px", mx: "auto" }}>
          <IconButton onClick={() => router.back()} sx={{ m: 1 }}>
            <ArrowBack />
          </IconButton>
          <Paper
            sx={{
              display: "flex",
              bgcolor: "rgba(0, 51, 102, 0.05)",
              mx: 1.5,
              p: 1,
              textAlign: "center",
            }}
            elevation={2}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={`https://lsm-static-prod.livescore.com/medium/${data.T1[0].Img}`}
                style={{ width: "20px", height: "20px" }}
              />
              <Typography>{data.T1[0].Nm}</Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography>
                {data.Tr1} - {data.Tr2}
              </Typography>
              <Typography>{data.Eps}</Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <img
                src={`https://lsm-static-prod.livescore.com/medium/${data.T2[0].Img}`}
                style={{ width: "20px", height: "20px" }}
              />
              <Typography>{data.T2[0].Nm}</Typography>
            </Box>
          </Paper>

          <MatchDetails
            Eps={data.Eps}
            Eid={data.Eid}
            livescoreApiKey={livescoreApiKey}
          />
        </Box>
      )}
    </>
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
