// Modules
const http = require('http');
const fs = require('fs');

// Server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Render page
fs.readFile('index.html', function (err, html) {
           
    const server = http.createServer(function(req, response) {  
        
        
        //taken from ganache - hd-wallet -provider if u want to use it locally.
          // or use infura if u want to do it through rinkbye test network.
            // web3.getaccount[0]
          var qs = require('querystring');
        
          
          if (req.method == 'POST') {
              var body = '';
          
              req.on('data', function (data) {
                  body += data;
          
                      // Too much POST data, kill the connection!
                      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
              if (body.length > 1e6)
                          req.connection.destroy();
                  });
          
              req.on('end', function () {
                  var post = qs.parse(body);
                      // use post['blah'], etc.
                      console.log(post["customer_address"]+"  "+post["insurance_company_address"]+"  "+post["resolver_address"]);
                      res.write('contract deployed successfully to '+post["customer_address"]);
                      res.end();  
                      // make async call to solidity using hd wallet provider or meta mask to either local network or rinkbye network.
                  
                    });
          
          
        
          
        
        }else if(req.url == '/set-address') {
          //res.statusCode = 200;
          //res.setHeader('Content-Type', 'text/plain');
          //res.end('set address\n');
        
        
        }else if(req.url == '/claim-insurance'){
        
        }
        else if(req.url == '/pay-premium'){
        
        }else if(req.url == '/approve-insurance'){
        
        }else if(req.url == '/claim-insurance'){
        
        }


        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end(); 


    }).listen(port, hostname, () => {
    	// Console
	  	console.log(`Server running at http://${hostname}:${port}/`);
	});
});