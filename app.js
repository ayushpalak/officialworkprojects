const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

// Render page
fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       

    
    const server = http.createServer((req, res) => {
  
        if (req.url == '/deploy-contract') {
          // customer name will be 
        
        }});
        
        
        
        server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });











});

