import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from '../components/LoginForm'
import PLStandingsContainer from './containers/PLStandingsContainer';
import PLFixturesContainer from './containers/PLFixturesContainer';
import UserLeaguesContainer from './containers/UserLeaguesContainer';
import UserTeamsContainer from './containers/UserTeamsContainer';
import JoinLeagueContainer from './containers/JoinLeagueContainer';
import NewLeagueContainer from './containers/NewLeagueContainer';
import Main from './components/Main';

function App() {
  const [ user, setUser ] = useState({})
  const [ form, setForm ] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormChange = (input) => {
    setForm(input)
  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/user/leagues">
            <UserLeaguesContainer />
          </Route>
          <Route path="/user/teams">
            <UserTeamsContainer />
          </Route>
          <Route path="/leagues/join">
            <JoinLeagueContainer />
          </Route>     
          <Route path="/leagues/new">
            <NewLeagueContainer />
          </Route>
          <Route path="/standings/PL">
            <PLStandingsContainer />
          </Route>          
          <Route path="/fixtures/PL">
            <PLFixturesContainer />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
