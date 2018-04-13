import React from 'react'

class AddPoll extends React.Component {
	render () {
		return (
			<div>
				<form className='add-form'>
					<h3>What is your question?</h3>
					<input className='input' type='text' name='question' value='' placeholder='Enter in your question' />
					<h3>What are the options?</h3>
					<h3>A.</h3>
					<input className='input' type='text' name='option-a' value='' placeholder='Enter in option A.' />
					<h3>B.</h3>
					<input className='input' type='text' name='option-b' value='' placeholder='Enter in option B.' />
					<h3>C.</h3>
					<input className='input' type='text' name='option-c' value='' placeholder='Enter in option C.' />
					<h3>D.</h3>
					<input className='input' type='text' name='option-d' value='' placeholder='Enter in option D.' />

					<button className='btn' type='submit' disabled='true'>SUBMIT</button>
				</form>
			</div>
			)
	}
}

export default AddPoll