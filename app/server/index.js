/**
 * 
 *
 *
 *
 */


const express = require('express');
const path = require('path');

const app = express();

const bacon = require('bacon');


const BACON_URL = /.*\/projects\/bacon\/.*$/;
const FILE_NAME = /(.+)(\/[^/]+)$/;

app.use('*', (req, res, next) => {
	console.log('in portfolio server, ', req.baseUrl, ' : ', req.url, ' : ', req.path, ' : ', req.headers.referer);
	if (BACON_URL.test(req.headers.referer) && !BACON_URL.test(req.baseUrl)) {
		console.log('redirecting');
		res.redirect('/projects/bacon' + req.baseUrl);
	}
	
	next();
});

app.use('/projects/bacon', bacon);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});



app.listen(4000);

