import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPLStandings } from '../actions/standingsActions';
import PLStandings from '../components/PLStandings';

class PLStandingsContainer extends Component {

	componentDidMount() {
		this.props.fetchPLStandings()
	}

	render() {
		if (this.props.loading) {
			return (
				<h1>Loading...</h1>
			)
		} else {
			return(
				<div>
					<PLStandings standings={this.props.standings} />
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		standings: state.standingsReducer.standings,
		loading: state.standingsReducer.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPLStandings: () => dispatch(fetchPLStandings())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PLStandingsContainer);