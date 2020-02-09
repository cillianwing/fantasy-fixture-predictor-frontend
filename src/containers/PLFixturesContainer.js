import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPLFixtures } from '../actions/fixturesActions';
import PLFixtures from '../components/PLFixtures'

class PLFixturesContainer extends Component {

	componentDidMount() {
		for (let i = 1; i < 2; i++) { // i < 39 to collect all match weeks. Leave at 2...too many API fetches
			this.props.fetchPLFixtures(i)
		}
		
	}

	render() {
		if (this.props.fixtures.loading) {
			return (
				<h1>Loading...</h1>
			)
		} else {
			return(
				<div>
					<PLFixtures fixtures={this.props.fixtures} />
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		fixtures: state.fixtures
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPLFixtures: (round) => dispatch(fetchPLFixtures(round))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PLFixturesContainer);