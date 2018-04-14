import API from 'redux-polls-api'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question, answers) {
	return {
		type: ADD_QUESTION,
		question,
		answers
	}
}

export function handleAddQuestion (question, answers, cb) {
	return (dispatch) => {
		return API.saveQuestion(question, answers)
			.then((question, answers) => {
				dispatch(addQuestion(question, answers))
				cb()
			})
			.catch(() => alert('There was an error. Try again.'))
	}
}

