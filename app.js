var express = require('express'); // express javascript framework 
var app = express();
var path = __dirname + '/assignment18_1';
var port = 3000;

app.use(express.static(path));
app.get('*', function(req,res){
    res.sendFile(path + '/index.html');
});
app.listen(port);
console.log('assignment18_1 is running on 127.0.0.1:3000');