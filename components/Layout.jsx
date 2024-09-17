import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Box } from "@mui/material"
import { useContext } from 'react';
import { ColorModeContext } from '../context/ColorModeContext';

const Layout = ({children}) => {

  const {mode} = useContext(ColorModeContext)

  const theme = createTheme({
      palette: {
          mode,
      }, typography : {
        fontFamily: 'Signika'
      }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{fontFamily: 'Signika', bgcolor: 'rgba(0, 51, 102, 0.2)', minHeight: '100vh', position: 'relative', pb: 6, overflowX: 'hidden'}} >
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default Layout