import { Box, Paper, Typography } from "@mui/material"
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";
import isLive from "../../utils/isLive";

const Match = ({match}) => {
  const {Eid, Eps, Tr1, Tr2, T1, T2} = match
  const team1 = T1[0]
  const team2 = T2[0]

  return <Link href={`/match/today-matches/${Eid}`}>
  <Paper elevation={2} sx={{my: 1.5, py: 0.5,  width: '100%', mx: 'auto', maxWidth: '700px', display: 'flex', flexDirection: 'row', borderLeftColor: (isLive(Eps) ? 'warning.main' : 'grey'), borderLeftWidth: 2, borderLeftStyle: 'solid', bgcolor: 'rgba(0, 51, 102, 0.1)', '&:hover': {cursor: 'pointer'}}}>

    <Typography sx={{color: (isLive(Eps) ? 'warning.main' : 'text.disabled'), fontSize: 15, textAlign: 'center', mx:2, alignSelf: 'center'}}>
      {
        Eps
      }
    </Typography>

    <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>

      <Box sx={{display: 'flex',justifyContent: 'flex-start',flex: 1, alignItems: 'center', mb: 0.5}}>
        <img src={`https://lsm-static-prod.livescore.com/medium/${team1.Img}`} style={{width: '20px', height: '20px'}} />
        <Typography sx={{fontSize: {xs: 14, lg: 18}}}>
          {team1.Nm}
        </Typography>
      </Box>

      <Box sx={{display: 'flex', flex: 1,}}>
        <img src={`https://lsm-static-prod.livescore.com/medium/${team2.Img}`} style={{width: '20px', height: '20px'}} />
        <Typography sx={{fontSize: {xs: 14, lg: 18}}}>
          {team2.Nm}
        </Typography>
      </Box>

    </Box>

    <Box sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center', height: '100%', alignItems: 'space-between'}}>
      <Typography sx={{mx: 2, color: 'primary.main'}}>
        {Tr1}
      </Typography>
      <Typography sx={{mx: 2, color: 'primary.main'}}>
        {Tr2}
      </Typography>
    </Box>

  </Paper>
  </Link>
}

const League = ({league}) => {
  const {Snm, Cnm, Events} = league
  return <Box sx={{p: 2,pt: 1, bgcolor: 'rgba(0, 51, 102, 0.1)', borderRadius: 2}} >
    <Box sx={{textAlign: 'center', py: 1}}>
      <Typography component={'h3'} sx={{ fontSize: 18, color: 'primary.dark'}}>
        {Snm}
      </Typography>
      <Typography component={'h4'} sx={{fontSize: 14, color: 'primary.main' }}>
        {Cnm}
      </Typography>
    </Box>

    {
      Events?.map(
        (event, index) => {
          return <Match match={event} key={index}/>
        }
      )
    }
  </Box>
}

const TodayMatches = ({data}) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {Stages} = data
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: "gray", mx: 'auto'}}>
          <TabList
            onChange={handleChange}
            aria-label="Leagues"
            textColor="secondary"
            indicatorColor="secondary" variant="scrollable" scrollButtons
            allowScrollButtonsMobile
          >
            {Stages?.map((league, index) => {
              return (
                <Tab
                  label={league.Snm}
                  value={String(index + 1)}
                  sx={{ mx: 2}}
                  key={index}
                />
              );
            })}
          </TabList>
        </Box>
        {Stages?.map((league, index) => {
          return <TabPanel value={String(index + 1)} key={index}>
            <League league={league} />
          </TabPanel>;
        })}
      </TabContext>
    </Box>
  )
}

export default TodayMatches