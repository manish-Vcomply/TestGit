
const express=require('express');
var app=express();
app.get('/',function(req,res){
res.send("Welcome user in testing of jenkins");
}
       );
app.listen(3000,function(req,res){
console.log("Server start on port: 3000");
  
});
