import React from 'react'
import PlayerStats from './PlayerStats'

class Leaderboard extends React.Component {
	render () {
		return (
			<div>
				<ul>
					<PlayerStats />
					<PlayerStats />
					<PlayerStats />
				</ul>
			</div>
			)
	}
}

export default Leaderboard