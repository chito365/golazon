import { Box, Typography, CircularProgress } from "@mui/material"
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import StadiumRoundedIcon from "@mui/icons-material/StadiumRounded";
import SportsRoundedIcon from "@mui/icons-material/SportsRounded";
import getMatchDate from '../../../utils/getMatchDate'

const MatchInfo = ({matchInfo, loading}) => {
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

    return (
        <Box>
          <Typography sx={{display: 'flex', alignItems: 'center', py: 1, mb: 0.5}}>
            <CalendarMonthRoundedIcon sx={{mr: 1}} />
            {getMatchDate(matchInfo.Esd)}
          </Typography>
          <Typography sx={{display: 'flex', alignItems: 'center', py: 1, mb: 0.5}}>
            <StadiumRoundedIcon sx={{mr: 1}} />
            {matchInfo?.Vnm && matchInfo.Vnm}
          </Typography>
          <Typography sx={{display: 'flex', alignItems: 'center', py: 1, mb: 0.5}}>
            <SportsRoundedIcon sx={{mr: 1}} />
            {matchInfo?.Refs && matchInfo.Refs[0]?.Nm}
          </Typography>
        </Box>
    )
}

export default MatchInfo