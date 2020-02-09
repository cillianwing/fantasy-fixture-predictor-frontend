const standingsReducer = (state={standings: [], loading: false}, action) => {
	switch (action.type) {
		case 'LOAD_PL_STANDINGS':
			return {
				...state,
				standings: [...state.standings],
				loading: true
			}

		case 'ADD_PL_STANDINGS':
			return {
				...state,
				standings: action.standings,
				loading: false
			}

		default:
			return state
	}
}

export default standingsReducer;