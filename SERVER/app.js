var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var data = [
  { name : 'Audrey Hepburn', triage:'red', gender:'male', age:'15', hospital:'A'},
  { name : 'Apple Juice', triage:'green', gender:'female', age:'18', hospital:'C'},
  { name : 'Iam Fat', triage:'black', gender:'male', age:'67', hospital:'A'},
  { name : 'Abby Ape', triage:'yellow', gender:'female', age:'35', hospital:'B'}
];
var BPM = '???';


app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Welcome to S.Traige');
	//res.json(quotes);
	console.log('someone is requesting')
});

app.get('/list', function(req, res){
	res.type('text/html');
	for(i=0; i<data.length; i++){
		res.write(JSON.stringify(data[i]) + '</br>');
	}
	res.end();

});

app.get('/list/:id', function(req, res){
	res.type('text/html');
	if( req.params.id < data.length && req.params.id >= 0 ){
		name = data[req.params.id].name;
		disease = data[req.params.id].disease;
		res.write('<h1>'+'S.Traige'+'</h1>');
		res.write('Name: '+name+'</br>'+'Diseasse: '+disease);
		res.end();
	}
	else{
		res.statusCode = 404;
		return res.send('404 ERROR');

	}
});

app.post('/pulse', function(req, res){
	console.log(req.body);
	console.log(typeof req.body);
	BPM = req.body.BPM.toString();
	res.type('text/plain');
	res.write('BPM_received');
	res.end();
});
app.post('/AddMember', function(req, res){
	console.log(req.body.name + req.body.triage + req.body.gender + req.body.age + req.body.hospital + req.body.breath + req.body.blood);
	console.log(typeof req.body);
	data.push(req.body);
	res.type('text/plain');
	res.write('member_received');
	res.end();
});
app.post('/PreAddMember', function(req, res){
	console.log(1);
	res.type('text/plain');
	res.write(BPM);
	res.end();
});



app.listen(80, '0.0.0.0', function(){
	console.log('listening too 80')
});
