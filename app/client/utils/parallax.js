/**
 *
 * 	A class that creates a parallax scrolling effect. Elements affected have class specified by name
 *  in the constructor. Speed is a number between 0 and 1. Container is the parent of the affected elements.
 *	The container must be a root level component of the app, must be relatively positioned, and must not
 *	have any positioned ancestors.
 *
 **/


export default class Parallax {
	constructor(container, speed = .5, name = 'parallax') {
		this.container = container;
		this.speed = speed;
		this.name = name;

		this.elements = [];

		this.init();
		this.update();

		//preserve a reference to these so they can be removed
		this.initListener = this.init.bind(this);
		this.updateListener = this.update.bind(this);

		window.addEventListener('resize', this.initListener);
		window.addEventListener('scroll', this.updateListener);
	}


	init() {
		if (this.container.parentElement.parentElement != document.getElementById('root')) {
			throw new Error('Parallax container must be at root level of app');
		}

		if (this.container.offsetParent != document.body) {
			throw new Error('Parallax container must not have any positioned ancestors');
		}

		if (window.getComputedStyle(this.container).position != 'relative') {
			throw new Error('Parallax container must be relatively positioned');
		}

		//accounts for space taken by navbar
		this.screenHeight = window.innerHeight - this.container.offsetTop;

		for (let i = 0; i < this.container.children.length; i++) {
			let el = this.container.children[i];

			if (el.classList.contains(this.name)) {
				this.elements.push(el);
			}
		}
	}


	update() {
		let scrollPos = document.body.scrollTop;

		this.elements.forEach(el => {
			el.style.cssText = 'background-position: 0px ' + this.getOffset(scrollPos, el) + 'px';
		});
	}


	destroy() {
		window.removeEventListener('resize', this.initListener);
		window.removeEventListener('scroll', this.updateListener);	
	}


	getOffset(scrollPos, el) {
		if (scrollPos + this.screenHeight < el.offsetTop) {
			return 0;
		
		} else if (scrollPos > el.offsetTop + el.offsetHeight) {
			return -el.offsetHeight;
		
		} else {
			let a = el.offsetTop - this.screenHeight;
			let b = el.offsetTop + el.offsetHeight;

			return -el.offsetHeight * this.speed * (scrollPos / (b - a) - a / (b - a)) / 2;
		}		
	}
}

