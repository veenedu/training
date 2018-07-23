/**
 * Simple server created using expressJS
 */

const app = require('express')();


app.get('/',function(req,res){
  res.send('Hello from express server'+ Date.now());
})


app.get('/foo',function(req,res){
  res.send('Foo:GET from express server'+ Date.now());
})

app.post('/foo',function(req,res){
  res.send('Foo:POST from express server'+ Date.now());
})

app.listen(3002,function(){
  console.log('Server running on : 3002')
})
