import { Typography, Box } from "@mui/material"
import Link from "next/link"
import ball from '../../assets/ball.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Box sx={{display: 'flex', flexDirection: 'column', width:'100%', height:'60px', position: 'relative', bgcolor: 'primary.main', fontFamily: 'Kanit', '&:hover': {cursor: 'pointer'}, overflow: 'hidden', borderRadius: 3}}>
        <img src={ball.src} alt="ball" style={{width: '100%', height: '100px', position: 'absolute', top:0, right: 0, opacity: 0.2}}  />
        <img src={ball.src} alt="ball" style={{width: '25px', height: '25px', position: 'absolute', top:3, right: 3, opacity: 0.5}}  />

        <Typography component={'h1'} sx={{position: 'absolute', right: '50%', top: 2,fontFamily: 'Kanit', fontWeight: 'bold', fontSize: 24, letterSpacing: 2}}>
            Everything
        </Typography>
        <Typography component={'h1'} sx={{position: 'absolute', left: '50%', bottom: 2, fontFamily: 'Kanit', fontWeight: 'bold', fontSize: 24, letterSpacing: 2}}>
            Football
        </Typography>

        <img src={ball.src} alt="ball" style={{width: '25px', height: '25px', position: 'absolute', bottom:3, left: 3, opacity: 0.5}}  />

      </Box>
    </Link>

  )
}

export default Logo