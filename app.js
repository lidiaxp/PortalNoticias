var app = require('./config/server');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*app.listen(3000, function(req, res){
	console.log("Servidor ON");
});*/
