import { Box, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const navItems = [
    {
        title: 'match', route: '/match'
    },
    {
        title: 'standings', route: '/standings'
    },
    {
        title: 'video', route: '/video'
    },
    {
        title: 'news', route: '/news'
    }
]

const NavBar = () => {
    const {pathname} = useRouter()
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', maxWidth: '800px', mx: 'auto'}}>
        {
            navItems.map(
                ({title, route}, index) => {
                    return(
                        <Link href={route} key={index}>
                            <Button sx={{px: 2, py: 1, borderRadius: 0, fontFamily: 'inherit', fontSize: 18, borderBottomColor: 'primary.light', borderBottomWidth: (pathname.startsWith(route) ? 3 : 0 ), borderBottomStyle: 'solid', mx: 0.5, color: (pathname.startsWith(route) ? 'primary.light' : 'primary.main' )}}   >
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

export default NavBar