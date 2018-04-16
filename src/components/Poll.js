import React, { Component } from 'react'
import { connect } from 'react-redux'


class Poll extends Component {
	render() {
		return(
			<div clasName='poll-container'>
				{JSON.stringify(this.props)}
			</div>
			)
	}
}

function mapStateToProps ({ authedUser, polls, users}, { match }){
	const { id } = match.params
	const poll = polls[id]

	if (!poll) {
		return {
			poll: null
		}
	}

	const votes = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].reduce((vote, key) => {
		if (vote !== null) {
			return vote[0]
		}

		return poll[key].includes(authedUser)
			? key
			: vote
	}, null)

	return {
		poll,
		votes,
		authedUser,
		authorAvatar: users[poll.author].avatarURL
	}
}
export default connect(mapStateToProps)(Poll)