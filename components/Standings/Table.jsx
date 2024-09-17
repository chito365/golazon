import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const table = ({table}) => {
  console.log(table)

  return (
    <TableContainer component={Paper} elevation={4} sx={{my: 2, mb: 4, width: '90%', maxWidth: '600px', mx: 'auto', bgcolor: 'rgba(0, 51, 102, 0.05)'}}>
      <Table sx={{ width: '100%'}} aria-label="Standings">
        <TableHead sx={{fontWeight: 'bolder', bgcolor: 'rgba(0, 51, 102, 0.1)'}}>
          <TableRow >
            <TableCell align='left'>#</TableCell>
            <TableCell >TEAM</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">GD</TableCell>
            <TableCell align="right">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {table?.map(({rank, clubName, matches, goalDifference, points}) => (
            <TableRow
              key={rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>
                {rank}
              </TableCell>
              <TableCell >{clubName}</TableCell>
              <TableCell align="right">{matches}</TableCell>
              <TableCell align="right">{goalDifference}</TableCell>
              <TableCell align="right">{points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default table
