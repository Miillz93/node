require("@babel/register");


const express = require('express');

const app = express();
const morgan = require('morgan');

// Middleware
//app.use((req, res, next) => {
//	console.log('URL : ' + req.url);
//});


const members = [
	{
		id : 1,
		name : "John"
	},
	{
		id: 2,
		name: 'Julie'
	},
	{
		id: 3,
		name: 'Jack'
	}
];

app.use(morgan('dev'));
//
//app.get('/api', (req, res)=>{
//	res.send('Root API');
//});
//
//app.get('/api/v1', (req, res)=>{
//	res.send('<h1>Version 1</h1>');
//});
//
//app.get('/api/v1/books/:id/:id2', (req, res)=>{
//	res.send(req.params);
//});


app.use('/api/v1/members/:id', (req, res)=>{
	res.send(members[(req.params.id)-1].name);
});

//app.use('/api/v1/members/', (req, res)=>{
//	res.send(Object.values(members));
//});


// Max Members return
app.use('/api/v1/members/', (req, res)=>{
	if(req.query.max != undefined){
		res.send(members.slice(0, req.query.max));
	}else{
		res.send(members);
	}
	res.send(Object.values(members));
});
//http://localhost:8080/api/v1/members/?max=2



app.get('/api/v2', (req, res)=>{
	res.send('<h1>Version 2</h1>');
});

app.listen(8080, () => {
	console.log("Listening on port 8080");
	});
