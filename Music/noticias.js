var http = require('http');

var server = http.createServer(function(req, res){
	var categoria = req.url;
    if(categoria == '/tecnologia'){
    	res.end("<html><body>Not&iacute;cias de Tecnologia</body></html>");
    } else if(categoria == '/beleza'){
		res.end("<html><body>Not&iacute;cias de beleza</body></html>");
    } else if(categoria == '/moda'){
    	res.end("<html><body>Not&iacute;cias de moda</body></html>");
    }else if(categoria == '/'){
    	res.end("<html><body>Portal de not&iacute;cias</body></html>");	
    } else{
res.end("<html><body>P&aacute;gina n&atilde;o encontrada</body></html>");	
    }
	
});

server.listen(3000);