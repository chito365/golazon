import { Box, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const navItems = [
    {
        title: 'live matches', route: '/match'
    },
    {
        title: 'today matches', route: '/match/today-matches'
    }
]

const MatchesNav = () => {
    const {pathname} = useRouter()
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mx: 'auto', bgcolor: 'rgba(0, 51, 102, 0.1)', boxShadow: '0 0 3px gray'}}>
        {
            navItems?.map(
                ({title, route}, index) => {
                    return(
                        <Link href={route} key={index}>
                            <Button sx={{px: 2, py: 1, borderRadius: 0, fontFamily: 'inherit', fontSize: 17, borderBottomColor: 'primary.light', borderBottomWidth: (pathname === route ? 3 : 0 ), borderBottomStyle: 'solid', mx: 1, color: (pathname === route ? 'primary.light' : 'primary.main' )}}   >
                                {title}
                            </Button>
                        </Link>
                    )
                }
            )
        }
    </Box>
  )
}

export default MatchesNav