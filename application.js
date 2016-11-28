var express = require('express');
var app = express();

var body_parser = require('body-parser');
//var multer = require('multer')

const PORT=9000;


var mysql = require('mysql');
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '123',
database: 'example'});
connection.connect();



app.use(express.static(__dirname + '/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
//app.use(multer());

app.post("/rest/register", function(req, res){

        var user = req.body;
	console.log(user);
	res.send("Hello from register");
});

app.get("/get1", function(req, res){
	var user = req.body;
	console.log(user);
        connection.query('SELECT * FROM ext', function(err, rows, fields){
        if (!err){
                console.log("RESULT", rows);
                var result = rows;
                console.log(JSON.stringify(rows));
                jsonresult = JSON.stringify(rows);
                res.json(rows);
        }
        else{
                console.log("ERROR");
        }
	//res.send("Hello from get");

});
});

app.listen(PORT);
