import { Link, Typography, Box } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{textAlign: 'center', borderTop: '1px solid grey', position: 'absolute', bottom: 0, width: '100%'}}>
    <Typography >
      Everything Football &copy; 2022
    </Typography>
    <Typography >
      Built by <Link href='https://www.twitter.com/_folareen_' target={'_blank'}>
        Folareen 👨‍💻
      </Link>
    </Typography>
    </Box>
  )
}

export default Footer