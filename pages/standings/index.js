import { Box } from "@mui/material";
import StandingsNav from "../../components/Standings/StandingsNav";
import Table from "../../components/Standings/Table";
import Loader from "../../components/Loader";
import { useState, useEffect } from "react";

const Standings = ({ transfermarketApiKey }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const seasonsOptions = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": transfermarketApiKey,
            "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
          },
        };

        const seasonResponse = await fetch(
          "https://transfermarket.p.rapidapi.com/competitions/list-default?domain=de",
          seasonsOptions
        );
        const season = await seasonResponse.json();

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": transfermarketApiKey,
            "X-RapidAPI-Host": "transfermarket.p.rapidapi.com",
          },
        };

        const response = await fetch(
          `https://transfermarket.p.rapidapi.com/competitions/get-table?id=L1&seasonID=2022&domain=de`,
          options
        );
        const tableResponse = await response.json();
        const data = [season.defaultCompetitions, tableResponse.table];
        setData(data);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ pb: 2 }}>
      {data && (
        <>
          <StandingsNav leagues={data[0]} />
          <Table table={data[1]} />
        </>
      )}
    </Box>
  );
};

export default Standings;

export const getServerSideProps = async () => {
  return {
    props: {
      transfermarketApiKey: process.env.TRANSFERMARKET,
    },
  };
};
