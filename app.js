var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 7776);

app.use(express.static('public'));


app.get('/',function(req,res){
  res.render('index', {layout : 'main'});
  console.log("home page");
});

app.get('/other-page',function(req,res){
  res.render('other-page');
});

app.get('/cleo',function(req,res){
  res.render('profile', {layout : 'main'});
  console.log("cleos profile");
});

app.get('/myprofile',function(req,res){
  res.render('khalissi', {layout : 'main'});
  console.log("my profile");
});

app.get('/friends',function(req,res){
  res.render('friends', {layout : 'main'});
  console.log("friends");
});







app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
