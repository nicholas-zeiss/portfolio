/**
 *
 * 	Serves up static files only
 *
 **/


const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'nicholas.zeiss.portfolio@gmail.com',
		pass: require('./auth')
	}
});

const messageDefaults = {
	from: 'nicholas.zeiss.portfolio@gmail.com',
	to: 'nicholas.zeiss@gmail.com'
};


app.get('/', (req, res) => {
	res.redirect(301, '/home');
});


app.use(express.static(path.join(__dirname, '../')));


app.use('/email', bodyParser.urlencoded({ extended: true }));


app.get(/^\/(home|about|projects|contact)$/, (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});


app.get('*', (req, res) => {
	res.redirect(301, '/home');
});


app.post('/email', (req, res) => {
	let messageText = [
		req.body.name,
		req.body.email,
		req.body.phone,
		req.body.site,
		req.body.message
	];

	messageText = (
		messageText
		.filter(str => str)
		.join('\n~~~~~~~~~~~~~~~~\n')
	);

	let message = Object.assign({
		subject: req.body.name,
		text: messageText
	}, messageDefaults);

	transporter.sendMail(message, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
	});

	res.redirect(301, '/contact');
});


app.listen(4000);

