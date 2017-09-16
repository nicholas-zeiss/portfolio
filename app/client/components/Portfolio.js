/**
 *
 * 	Top level component of the app, renders the nav bar at the top of the page and sets up routing
 *
 **/

import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';


class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}


	render() {
		return (
			<Router>
				<div>
					<header>
						<div id='icon'>
							<h2>NICK ZEISS</h2>
							<h4>Full Stack Developer</h4>
						</div>

						<div id='links'>
							<NavLink exact to='/'>HOME</NavLink>
							<NavLink to='/about'>ABOUT</NavLink>
							<NavLink to='/projects'>PROJECTS</NavLink>
							<NavLink to='/contact'>CONTACT</NavLink>
						</div>
					</header>

					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/projects' component={Projects}/>

					<footer>
					</footer>
				</div>
			</Router>
		);
	}
}


export default Portfolio;

