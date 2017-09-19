/**
 *
 * 	Component that holds the Contact page
 *
 **/

import React from 'react';


class Contact extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			emailClass: ''
		};
	}


	emailChange() {
		if (!this.state.emailClass) {
			this.setState({ emailClass: 'modified' });
		}
	}


	render() {
		return (
			<div id='contact'>
				<form action='/email' method='post' encType='text/plain'>
					<input id='name' type='text' name='name' placeholder='Name *' required></input>
					<input id='email' type='email' name='email' placeholder='Email address *' required></input>
					<textarea id='message' name='message' placeholder='Message' required></textarea>
					<input id='submit' type='submit' value='Submit'></input>
					<span>* Required</span>
				</form>
			</div>
		);
	}
}


export default Contact;

