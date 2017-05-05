var pi = require('pi-fast-gpio');
var express = require('express');
var app = express();
var router = app.Router();

pi = new pi();

const R_PIN = 10;
const G_PIN = 9;
const B_PIN = 11;

var R_VAL = 0;
var G_VAL = 0;
var B_VAL = 0;

pi.connect('127.0.0.1', 8888, function(e){
	console.log("Pi Connect", e);
})

router.put("/led", function(req, res, next){

	var r = req.body.r;
	var g = req.body.g;
	var b = req.body.b;

	if(!checkColor(r) || !checkColor(g) || !checkColor(b)){
		res.send(400);
		return next();
	}

	R_VAL = r;
	G_VAL = g;
	B_VAL = b;

	pi.setPwmDutycycle(R_PIN,R_VAL)
	pi.setPwmDutycycle(G_PIN,G_VAL)
	pi.setPwmDutycycle(B_PIN,B_VAL)
	
});

function checkColor(c){
	return Number.isInteger(c) && c >= 0 && c <256;
}


module.exports = router;