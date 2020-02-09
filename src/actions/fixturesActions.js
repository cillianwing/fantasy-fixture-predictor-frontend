export const fetchPLFixtures = (round) => {
	return (dispatch) => {
		dispatch({type: 'LOAD_PL_FIXTURES'});
		fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_${round}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
				"x-rapidapi-key": "0b5aa8c875msheaf745d0e278895p1c1a57jsn2821cb7d8749"
			}
		})
		.then(res => res.json())
		.then(resJSON => {
			dispatch({type: 'ADD_PL_FIXTURES', fixtures: resJSON.api.fixtures})
		})
	}
}