import React from 'react'

class Home extends React.Component {
	render () {
		return (
			<div>
				<h2 className='poll-category'>
	        <ul className='li-inline'>
	          <li>Unanswered</li>
	          <li>Answered</li>
	        </ul>
	      </h2>
	      <ul className='questions'>
	        <li>Poll 1</li>
	        <li>Poll 2</li>
	        <li>Poll 3</li>
	      </ul>
      </div>
		)
	}
}

export default Home