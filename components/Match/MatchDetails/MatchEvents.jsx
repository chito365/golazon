import { Box, Grid, Typography, CircularProgress } from "@mui/material"
import ball from '../../../assets/ball.svg'
import getCurrentStatus from '../../../utils/getCurrentStatus'

const MatchEvents = ({incidents, Eps, loading}) => {
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

  if(!incidents.Incs){
    return (
        <Box>
            Unavailable...
        </Box>
    )
  }

  const firstHalf = incidents.Incs['1']
  const secondHalf = incidents.Incs['2']


  return (
    <Box >
      {
        firstHalf?.map((incident, index) => {
          const {Min, Nm} = incident
          return (
          <Grid container sx={{borderBottom: '1px solid rgba(0, 51, 102, 0.4)', py: 1}} key={index}>
            <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
              <Typography sx={{p: 1, color: 'rgb(0, 51, 102)'}}>
                {Min}{`'`}
              </Typography>
            </Grid>

              {
                Nm === 1 &&
                (
                  <>
                  {
                    incident.Sc === undefined ?
                    <>
                    <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                      <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                        {incident.Pn}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Box sx={{height: '15px', width: '10px', bgcolor: 'yellow', borderRadius: 0.5}}>
                      </Box>
                    </Grid>
                    </>
                    :
                    <>
                    <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                      <Box >
                        {
                          incident.Incs &&
                          <>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                              {
                                incident.Incs[0].Pn
                              }
                            </Typography>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 12, sm: 14}, color: 'gray'}}>
                              {
                                incident.Incs[1].Pn
                              }
                            </Typography>
                          </>   
                        }
                        {
                          <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                            {
                              incident.Pn
                            }
                          </Typography>
                        }
                      
                      </Box>
                    </Grid>
                    <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <img src={ball.src} width={10} height={10} />
                    </Grid>
                    </>
                  }
                  </>
                )
              }

              {
                Nm === 2 &&
                <Grid item xs={4}>
                </Grid>
              }

              <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                {
                incident.Sc !== undefined &&
                <Typography>
                  {incident.Sc[0]} - {incident.Sc[1]}
                </Typography>
                }
              </Grid>

              {
                Nm === 2 &&
                (
                  <>
                  {
                    incident.Sc === undefined ?
                    <>
                    <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Box sx={{height: '15px', width: '10px', bgcolor: 'yellow', borderRadius: 0.5}}>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                      <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                        {incident.Pn}
                      </Typography>
                    </Grid>

                    </>
                    :
                    <>
                      <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={ball.src} width={10} height={10} />
                      </Grid>
                      <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                        <Box >
                        {
                          incident.Incs &&
                          <>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                              {
                                incident.Incs[0].Pn
                              }
                            </Typography>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 12, sm: 14}, color: 'gray'}}>
                              {
                                incident.Incs[1].Pn
                              }
                            </Typography>
                          </>   
                        }
                        {
                          <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                            {
                              incident.Pn
                            }
                          </Typography>
                        }                            
                        </Box>
                      </Grid>
                    </>
                  }
                  </>
                )
              }
          </Grid>
          )
        })
      }

      {
        ((getCurrentStatus(Eps) == 'HT') || (getCurrentStatus(Eps) == 'FT') || (getCurrentStatus(Eps) > 45) ) 
        &&
        <Typography sx={{borderBottom: '1px solid rgba(0, 51, 102, 0.4)',bgcolor: 'rgba(0, 51, 102, 0.15)', textAlign: 'center'}}>
          HT
        </Typography>
      }


      {secondHalf &&
        <>
        {secondHalf?.map((incident, index) => {
          const {Min, Nm} = incident
          return (
            <Grid container sx={{borderBottom: '1px solid rgba(0, 51, 102, 0.4)', py: 1}} key={index}>
            <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
              <Typography sx={{p: 1, color: 'rgb(0, 51, 102)'}}>
                {Min}{`'`}
              </Typography>
            </Grid>

              {
                Nm === 1 &&
                (
                  <>
                  {
                    incident.Sc === undefined ?
                    <>
                    <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                      <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                        {incident.Pn}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Box sx={{height: '15px', width: '10px', bgcolor: 'yellow', borderRadius: 0.5}}>
                      </Box>
                    </Grid>
                    </>
                    :
                    <>
                      <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                        <Box >
                        {
                          incident.Incs &&
                          <>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                              {
                                incident.Incs[0].Pn
                              }
                            </Typography>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 12, sm: 14}, color: 'gray'}}>
                              {
                                incident.Incs[1].Pn
                              }
                            </Typography>
                          </>   
                        }
                        {
                          <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                            {
                              incident.Pn
                            }
                          </Typography>
                        }                       
                        </Box>
                      </Grid>
                      <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={ball.src} width={10} height={10} />
                      </Grid>
                    </>
                  }
                  </>
                )
              }

              {
                Nm === 2 &&
                <Grid item xs={4}>
                </Grid>
              }

              <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                {
                  incident.Sc !== undefined &&
                  <Typography>
                    {incident.Sc[0]} - {incident.Sc[1]}
                  </Typography>
                }
              </Grid>

              {
                Nm === 2 &&
                (
                  <>
                  {
                    incident.Sc === undefined ?
                    <>
                    <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <Box sx={{height: '15px', width: '10px', bgcolor: 'yellow', borderRadius: 0.5}}>
                      </Box>
                    </Grid>
                    <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                      <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                        {incident.Pn}
                      </Typography>
                    </Grid>
                    </>
                    :
                    <>
                      <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={ball.src} width={10} height={10} />
                      </Grid>
                      <Grid item xs={3} sx={{display: 'flex', alignItems: 'center'}}>
                        <Box >
                        {
                          incident.Incs &&
                          <>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                              {
                                incident.Incs[0].Pn
                              }
                            </Typography>
                            <Typography sx={{lineHeight: 0.9, fontSize: {xs: 12, sm: 14}, color: 'gray'}}>
                              {
                                incident.Incs[1].Pn
                              }
                            </Typography>
                          </>   
                        }
                        {
                          <Typography sx={{lineHeight: 0.9, fontSize: {xs: 16, sm: 18}, mb: 0.8}}>
                            {
                              incident.Pn
                            }
                          </Typography>
                        }                         
                        </Box>
                      </Grid>
                    </>
                  }
                  </>
                )
              }

          </Grid>
          )
        })
        }
        </>
      }

      {
        ((getCurrentStatus(Eps) == 'FT') || (getCurrentStatus(Eps) > 90) ) 
        &&
        <Typography sx={{borderBottom: '1px solid rgba(0, 51, 102, 0.4)',bgcolor: 'rgba(0, 51, 102, 0.15)', textAlign: 'center'}}>
          FT
        </Typography>
      }
    </Box>
  )
}

export default MatchEvents
