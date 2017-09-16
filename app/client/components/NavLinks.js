/**
 *
 * 	Component that holds the Home page
 *
 **/

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = props =>  {
	
	return (
		<div className={'links' + (props.show ? ' show' : '') }>
			<NavLink exact to='/'>HOME</NavLink>
			<NavLink to='/about'>ABOUT</NavLink>
			<NavLink to='/projects'>PROJECTS</NavLink>
			<NavLink to='/contact'>CONTACT</NavLink>
		</div>
	);
};


export default NavLinks;

