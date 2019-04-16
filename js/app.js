var express = require ('express');
var app = express();
const port= process.env.PORT || 1337
var router = express.Router();

//path
const path = require('path'); 
const publicDirectoryPath = path.join(__dirname, '../');
console.log(__dirname)
app.use(express.static(publicDirectoryPath));

app.get('/login',function(req,res){
    res.sendFile(path.join(publicDirectoryPath+'/views/login.html'));
  });

// app.get('',(req,res)=>{
//     res.send('<h1>hola</h1>')});

app.listen(port,function(){
    console.log('I\'m listening ')
});

