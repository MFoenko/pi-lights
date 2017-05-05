var pi = require('pi-fast-gpio');

pi = new pi();

const R = 10;
const G = 9;
const B = 11;


pi.connect('127.0.0.1', 8888, function(e){

	console.log(e);

	while(true){
	for(var b=0;b<256;b++)	
	for(var i = 11;i>=9;i--){
		pi.setPwmDutycycle(i,b);
	}

	for(var b=255;b>=0;b--){
	pi.setPwmDutycycle(R,b)
	pi.setPwmDutycycle(G,b)
	pi.setPwmDutycycle(B,b)
	}
	}
	pi.close();
	
})
