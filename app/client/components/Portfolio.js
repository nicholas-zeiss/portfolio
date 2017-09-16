/**
 *
 * 	Top level component of the app, renders the nav bar at the top of the page and sets up routing
 *
 **/

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import NavLinks from './NavLinks';
import Projects from './Projects';


class Portfolio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showSideNav: false
		};
	}


	toggleNav() {
		this.setState({ showSideNav: !this.state.showSideNav });
	}


	render() {
		return (
			<Router>
				<div>
					<header>
						<div id='navbar'>
							<div id='icon'>
								<h2>NICK ZEISS</h2>
								<p>Web Developer</p>
							</div>

							<NavLinks />							

							<div id='mobile-nav' onClick={this.toggleNav.bind(this)}>

								<div id='burger'>
									<div></div>
									<div></div>
									<div></div>
								</div>

								<NavLinks show={this.state.showSideNav}/>
							</div>
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

