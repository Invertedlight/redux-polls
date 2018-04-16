import React, { Component } from 'react'

class AddPoll extends Component {
	state = {
		question: '',
		a: '',
		b: '',
		c: '',
		d: '',
	}

	handleInputChange = (e) => {
		const { value, name } = e.target

		this.setState(() => ({
			[name]: value
		}))
	}

	isDisabled = () => {
		const {question, a, b, c, d } = this.state

		return question === '' 
			|| a === '' 
			|| b === '' 
			|| c === '' 
			|| d === ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('Add Poll: ', this.state)
	}

	render () {
		const { question, a, b, c, d } = this.state

		return (
			<div >
				<form className='add-form' onSubmit={this.handleSubmit}>
					<h3 style={{marginBottom: 5}}>What is your question?</h3>
					<input 
						className='input' 
						type='text' 
						name='question' 
						value={question}
						onChange={this.handleInputChange} 
						placeholder="Enter in your question" 
					/>

					<h3>What are the options?</h3>
					<label className='label' htmlFor='a'>A.</label>
					<input 
						className='input' 
						type='text' 
						name='a' 
						value={a} 
						onChange={this.handleInputChange}
						placeholder="Enter in option A's value." 
					/>

					<label className='label' htmlFor='b'>B.</label>
					<input 
						className='input' 
						type='text' 
						name='b' 
						value={b} 
						onChange={this.handleInputChange}
						placeholder="Enter in option B's value." 
					/>
					<label className='label' htmlFor='c'>C.</label>
					<input 
						className='input' 
						type='text' 
						name='c' 
						value={c} 
						onChange={this.handleInputChange}
						placeholder="Enter in option C's value." 
					/>
					<label className='label' htmlFor='d'>D.</label>
					<input 
						className='input' 
						type='text' 
						name='d' 
						value={d} 
						onChange={this.handleInputChange}
						placeholder="Enter in option D's value." 
					/>
						

					<button className='btn' type='submit' disabled={this.isDisabled()}>
						SUBMIT
					</button>
				</form>
			</div>
			)
	}
}

export default AddPoll

