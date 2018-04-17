import React from 'react'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'


function Nav () {
	return (
		<div className='App-header'>
			<ul className='li-inline'>
        <li><img src={logo} className="App-logo" alt="logo" /></li>
        <li className='nav-bottom'>
        	<NavLink exact activeClassName='active' to='/'>
        		Home
      		</NavLink>
      	</li>
        <li className='nav-bottom'>
	        <NavLink activeClassName='active' to='/leaderboard'>
	        	Leaderboard
	        </NavLink>
        </li>
        <li className='nav-bottom'>
        	<NavLink activeClassName='active' to='/add'>
        		Add Poll
      		</NavLink>
      	</li>
    	</ul>
    </div>
		)
}

export default Nav;
