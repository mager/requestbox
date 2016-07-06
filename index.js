var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

app.route('/')
  .post(function(req, res) {
    r = req.body;
    console.log('\n\n' + JSON.stringify(r) + '\n\n');
    res.json(r);
  });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
