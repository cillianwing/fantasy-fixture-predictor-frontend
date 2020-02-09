import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PLStandings = (props) => {
	const classes = useStyles();

	const { standings } = props
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} size="small" aria-label="a dense table">
			  <TableHead>
			    <TableRow>
			      <TableCell align="center">Position</TableCell>
			      <TableCell align="center">Team</TableCell>
			      <TableCell align="center">Points</TableCell>
			      <TableCell align="center">Games Played</TableCell>
			      <TableCell align="center">Wins</TableCell>
			      <TableCell align="center">Losses</TableCell>
			      <TableCell align="center">Draws</TableCell>
			      <TableCell align="center">Goals Scored</TableCell>
			      <TableCell align="center">Goals Against</TableCell>
			    </TableRow>
			  </TableHead>
			  <TableBody>
			  	{standings.map(team => {
			  		return (
			  			<TableRow key={team.team_id}>
			  				<TableCell align="center">{team.rank}</TableCell>
			  				<TableCell align="center">{team.teamName}</TableCell>
			  				<TableCell align="center">{team.points}</TableCell>
			  				<TableCell align="center">{team.all.matchsPlayed}</TableCell>
			  				<TableCell align="center">{team.all.win}</TableCell>
			  				<TableCell align="center">{team.all.draw}</TableCell>
			  				<TableCell align="center">{team.all.lose}</TableCell>
			  				<TableCell align="center">{team.all.goalsFor}</TableCell>
			  				<TableCell align="center">{team.all.goalsAgainst}</TableCell>
			  			</TableRow>
		  			)
		  		})}
		  	</TableBody>
			</Table>
		</TableContainer>
	)

}

export default PLStandings;