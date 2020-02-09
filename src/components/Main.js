import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Main = () => {
	const classes = useStyles();

	return(
    <div className={classes.root}>
      <ButtonGroup variant="contained" orientation="vertical" size="large" color="primary" aria-label="vertical large contained primary button group">
      	<Button component={NavLink} to={"/"}>Home</Button>
        <Button component={NavLink} to={"/user/leagues"}>Leagues</Button>
        <Button component={NavLink} to={"/user/teams"}>Teams</Button>
        <Button component={NavLink} to={"/leagues/join"}>Join a League</Button>
        <Button component={NavLink} to={"/leagues/new"}>Create a League</Button>
        <Button component={NavLink} to={"/standings/PL"}>Premier League Standings</Button>
        <Button component={NavLink} to={"/fixtures/PL"}>Premier League Fixtures</Button>
      </ButtonGroup>
    </div>
	)
}

export default Main;

// Will need to figure out how to design this using Material-UI so they have link-able buttons