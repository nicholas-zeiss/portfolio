/**
 *
 * 	Serves up static files only
 *
 **/


const repl = require('repl');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../')));
app.use('/', (req, res, next) => {
	if (req.url == '/email') {
		console.log(req.originalUrl);
		repl.start().context.req = req;
	}

	next();
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});

// app.post('/email', req => {
// 	 console.log(req.headers);
// 	 repl.start().context.req = req;
// });

app.listen(4000);

