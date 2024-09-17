import { Box, Grid, Typography, CircularProgress } from "@mui/material"

const MatchCommentary = ({matchCommentary, loading}) => {
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
    
    if(!matchCommentary?.Com){
        return (
            <Box>
                Unavailable...
            </Box>
        )
    }

    return (
        <Box>
            {
                matchCommentary?.Com?.map(({Min, Txt}, index) => {
                    return(
                        <Grid container sx={{bgcolor: 'rgba(0, 51, 102, 0.1)', p: 0.5, borderRadius: 1, my: 0.5}} key={index}>
                            <Grid item xs={1}>
                                <Typography sx={{color: 'rgb(0, 51, 102)'}}>
                                    {Min}{`'`}
                                </Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    {Txt}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }

        </Box>
    )
}

export default MatchCommentary