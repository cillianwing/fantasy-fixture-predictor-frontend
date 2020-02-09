const fixturesReducer = (state = { fixtures: [], loading: false }, action) => {
	switch (action.type) {
		case 'LOAD_PL_FIXTURES':
			return {
				...state,
				fixtures: [...state.fixtures],
				loading: true
			}

		case 'ADD_PL_FIXTURES':
			return {
				...state,
				fixtures: [...state.fixtures, action.fixtures],
				loading: false
			}

		default:
			return state
	}
}

export default fixturesReducer;