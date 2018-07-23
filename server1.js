/**
 * Simple server created using node's HTTP module
 */

const http = require('http');

let app = http.createServer(function(req,res){
  res.write('Hello '+ Date.now())
  res.end();
});

app.listen(3001,function(){
  console.log('Server running on 3001');
});
