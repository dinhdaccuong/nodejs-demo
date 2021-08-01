// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static(__dirname));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
console.log('App is listenning at 3000...')
app.listen(3000);

// *** GET Routes - display pages ***
// Root Route



app.get('/', function (req, res) {
    res.render('index.html');
});