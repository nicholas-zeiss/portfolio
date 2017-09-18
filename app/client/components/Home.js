/**
 *
 * 	Component that holds the Home page
 *
 **/

import React from 'react';

import Parallax from '../utils/parallax';


class Home extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			parallax: null
		};
	}


	componentDidMount() {
		this.setState({ parallax: new Parallax(document.getElementById('home')) });
	}



	componentWillUnmount() {
		this.state.parallax.destroy();
	}


	render() {
		return (
			<div id='home'>
				<section className='parallax' id='bg1'>
				</section>
				<section className='content'>
					<p>Lorem Ipsum</p>
				</section>
				<section className='parallax' id='bg2'>
				</section>
				<section className='content'>
					<p>Lorem Ipsum</p>
				</section>
				<section className='parallax' id='bg3'>
				</section>
				<section className='content'>
					<p>Lorem Ipsum</p>
				</section>
			</div>
		);
	}
}


export default Home;

