var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.route('/')
  .get(function(req, res) {
    res.render('pages/index');
  })
  .post(function(req, res) {
    r = req.body;

    console.log(r);
    res.json(r);
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
