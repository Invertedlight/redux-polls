import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
// import reducer from './reducers'
// import middleware from './middleware' 
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
