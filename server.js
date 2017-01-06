var express = require('express');

// Create App
var app = express();

// specify what folder will be used 
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Express server is running on port 3000');
})

