var express = require('express');
var app = express();
var bodyParser = require ('body-parser');

var user = {
	login: "jojo",
	mdp: "mdp"
}

app.use(bodyParser.urlencoded({ extended: false}));

app.use("/", express.static(__dirname + "/pubic"));

app.post('/auth', function(req, res) {
	var p1 = req.body.login;
	var p2 = req.body.mdp;

	if(user.login === p1 && user.mdp === p2){
		res.send("success");
	}else{
		res.send("echec");
	}

	console.log("p1=" + p1);
	console.log("p2=" + p2);
});

app.listen(3300, function () {
	console.log('Example app listening on port 3300!');
});
