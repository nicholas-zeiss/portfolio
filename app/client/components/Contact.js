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
		};
	}


	render() {
		return (
			<div id='contact'>
				<form action='/email' method='post'>
					<div className='form-row'>
						<input type='text' name='name' placeholder='* Name' required></input>
						<input id='email' type='email' name='email' placeholder='* Email address' required></input>
					</div>
					<div className='form-row'>
						<input type='text' name='phone' placeholder='Phone number'></input>
						<input type='url' name='site' placeholder='Website'></input>
					</div>
					<textarea id='message' name='message' placeholder='* Message' required></textarea>
					<input id='submit' type='submit' value='Submit'></input>
					<span>* Required</span>
				</form>
			</div>
		);
	}
}


export default Contact;

