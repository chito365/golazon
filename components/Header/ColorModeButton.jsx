import { IconButton } from "@mui/material"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { ColorModeContext } from "../../context/ColorModeContext";
import { useContext } from "react";

const ColorModeButton = () => {
  const {mode, setMode} = useContext(ColorModeContext)

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }

  return (
      <IconButton
        sx={{bgcolor: 'text.secondary', color: 'background.default',boxShadow:2, border: 1, borderColor: 'background.paper', position: {xs: 'absolute', sm: 'relative'}, right: {xs: 2, sm: 0} }}
        onClick={changeMode} mode={mode}
      >
        {mode === "dark" ? (
          <DarkModeRoundedIcon />
        ) : (
          <LightModeRoundedIcon/>
        )}
      </IconButton>
  )
}

export default ColorModeButton

