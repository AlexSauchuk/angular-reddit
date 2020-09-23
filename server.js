const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-reddit'));
//app.use('/semantic', express.static(path.join(__dirname, "libs/semantic/dist")))

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '/dist/angular-reddit/index.html'));
});

app.listen(process.env.PORT || 8080);
