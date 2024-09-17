import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState, useEffect } from "react";
import MatchInfo from "./MatchInfo";
import MatchEvents from "./MatchEvents";
import MatchLineups from "./MatchLineups";
import MatchCommentary from "./MatchCommentary";
import MatchStats from "./MatchStats";

const detailsTabItems = ["info", "summary", "lineups", "commentary", "stats"];

const MatchDetails = ({ Eid, Eps, livescoreApiKey }) => {
  const [value, setValue] = useState("1");
  const [details, setDetails] = useState();
  const [detailsTab, setDetailsTab] = useState("info");
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setLoading(true);
    setValue(newValue);
    setDetailsTab(detailsTabItems[newValue - 1]);
  };

  useEffect(() => {
    setLoading(true);
    if (detailsTab === "summary") {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": livescoreApiKey,
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };

      fetch(
        `https://livescore6.p.rapidapi.com/matches/v2/get-incidents?Eid=${Eid}&Category=soccer`,
        options
      )
        .then((response) => response.json())
        .then((response) => setDetails(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else if (detailsTab === "stats") {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": livescoreApiKey,
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };

      fetch(
        `https://livescore6.p.rapidapi.com/matches/v2/get-statistics?Category=soccer&Eid=${Eid}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setDetails(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": livescoreApiKey,
          "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
        },
      };

      fetch(
        `https://livescore6.p.rapidapi.com/matches/v2/get-${detailsTab}?Category=soccer&Eid=${Eid}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setDetails(response))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [detailsTab]);

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "gray", mx: "auto", px: 1 }}>
          <TabList
            onChange={handleChange}
            aria-label="Match Details"
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            {detailsTabItems?.map((tab, index) => {
              return (
                <Tab
                  label={tab}
                  value={String(index + 1)}
                  sx={{
                    mx: 0.5,
                    p: 0,
                    width: "max-content",
                    boxSizing: "border-box",
                  }}
                  key={index}
                />
              );
            })}
          </TabList>
        </Box>
        <TabPanel value={"1"} key={"1"} sx={{ py: 0 }}>
          <MatchInfo matchInfo={details} loading={loading} />
        </TabPanel>
        <TabPanel value={"2"} key={"2"} sx={{ py: 0 }}>
          <MatchEvents incidents={details} Eps={Eps} loading={loading} />
        </TabPanel>
        <TabPanel value={"3"} key={"3"} sx={{ py: 0 }}>
          <MatchLineups matchLineups={details} loading={loading} />
        </TabPanel>
        <TabPanel value={"4"} key={"4"} sx={{ py: 0 }}>
          <MatchCommentary matchCommentary={details} loading={loading} />
        </TabPanel>
        <TabPanel value={"5"} key={"5"} sx={{ py: 0 }}>
          <MatchStats matchStats={details} loading={loading} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default MatchDetails;
