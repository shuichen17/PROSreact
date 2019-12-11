const express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/../client/dist'));
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var port = 1128;
app.listen(port, function() {
    console.log(`listening on port ${port}`);
    console.log(`server at http://localhost:1128`);
});
