'use strict';

var express = require('express'),
   routes = require('./app/routes/index.js'),
   mongo = require('mongodb').MongoClient;

var app = express();

//console.log("process.env.MONGOLAB_URI: " + process.env.MONGOLAB_URI);

//mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {
mongo.connect(process.env.MONGOLAB_URI, function (err, db) {

   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('MongoDB successfully connected on port 27017.');
   }

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

	/*
	app.get('/', function (req, res) {
		//res.send('Hello world!');
		res.sendFile(process.cwd() + '/index.html');
	});
	*/

   app.listen(5000, function () {
      console.log('Listening on port 5000...');
   });

});