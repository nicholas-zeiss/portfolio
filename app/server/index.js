/**
 *
 * 	Serves up static files only
 *
 **/


const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.use('/email', bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/email', (req, res) => {
	res.redirect(301, '/contact');
});

app.listen(4000);

