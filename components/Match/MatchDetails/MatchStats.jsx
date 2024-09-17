import translateStat, { statsArr } from "../../../utils/translateStat";
import getStatBarWidth from "../../../utils/getStatBarWidth";
import getStatBarColor from "../../../utils/getStatBarColor";
import { Box, Typography, CircularProgress } from "@mui/material";

const MatchStats = ({matchStats, loading}) => {
    if(loading){
        return (
            <Box sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",}}>
                <CircularProgress />
            </Box>
        )
    }

    if(!matchStats?.Stat){
      return (
        <Box>
            Unavailable...
        </Box>
      )
    }

    return (
        <Box sx={{py: 1}}>
          {
            statsArr?.map(stat => {
              return(
                <Box key={stat} sx={{mb: 2, bgcolor: 'rgba(0, 51, 102, 0.1)', p: 0.5, borderRadius: 1}}> 
                  <Box sx={{display: 'flex'}}>
                    <Typography>
                      {matchStats.Stat[0][stat]}
                    </Typography>
                    <Typography sx={{flex: 1, textAlign: 'center'}}>
                      {translateStat(stat)}
                    </Typography>
                    <Typography>
                      {matchStats.Stat[1][stat]}
                    </Typography>
                  </Box>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', height: '10px'}}>
                    <Box sx={{bgcolor: 'rgba(0, 51, 102, 0.2)', width: '49%', position: 'relative', borderRadius: 2}}>
                      <Box sx={{width: getStatBarWidth(matchStats.Stat[0][stat], matchStats.Stat[1][stat]), bgcolor: getStatBarColor(matchStats.Stat[0][stat], matchStats.Stat[1][stat]) , height: '10px', position: 'absolute', top: 0, bottom: 0, right: 0, borderRadius: 2}}>
                      </Box>
                    </Box>
                    <Box sx={{bgcolor: 'rgba(0, 51, 102, 0.2)', width: '49%', position: 'relative', height: '10px',borderRadius: 2}}>
                      <Box sx={{width: getStatBarWidth(matchStats.Stat[1][stat], matchStats.Stat[0][stat]), bgcolor: getStatBarColor(matchStats.Stat[1][stat], matchStats.Stat[0][stat]),  height: '10px', position: 'absolute', top: 0, bottom: 0, right: 0, borderRadius: 2}}>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )
            })
          }
        </Box>
    )
}

export default MatchStats