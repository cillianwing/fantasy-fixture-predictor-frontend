export const fetchPLStandings = () => {
	return (dispatch) => {
		dispatch({type: 'LOAD_PL_STANDINGS'});
		fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
				"x-rapidapi-key": "0b5aa8c875msheaf745d0e278895p1c1a57jsn2821cb7d8749"
			}
		})
		.then(res => res.json())
		.then(resJSON => {
			dispatch({type: 'ADD_PL_STANDINGS', standings: resJSON.api.standings[0]})
		})
	}
}