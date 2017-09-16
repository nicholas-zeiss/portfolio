/**
 *
 * 	Serves up static files only
 *
 **/


const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../index.html'));
});



app.listen(4000);

