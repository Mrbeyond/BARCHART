	var dem=document.getElementById('demo'); //DEMO CANVAS
		var ley=dem.getContext("2d");
		var txt=dem.getContext("2d");		 		
		var x=dem.width, y=dem.height;
		function devut(){ ley.clearRect(0,0,x,y); txt.clearRect(0,0,x,y); var a=40;
			ley.moveTo(10,0);ley.lineTo(10,y-30);ley.lineTo(x,y-30);ley.strokeStyle="white";ley.stroke();
			 for (var i = 0; i<6; i++) {			
				var	b=	Math.round(Math.random()*(0.89*y));
			 	if (b>200) {ley.fillStyle="green"; ley.fillRect(a,y-30,30,-b);}
			if (b>=100 && b<=200){ley.fillStyle="yellow"; ley.fillRect(a,y-30,30,-b);} 
				else{if (b<100) {ley.fillStyle="red"; ley.fillRect(a,y-30,30,-b);}};
				txt.strokeText(b,a+5,y-7); txt.font="17px century gothic";txt.stokeStyle="white";
					 a=a+40; sid1(0,0,10,99);sid2(0,100,10,100);sid3(0,201,10,90); }    }

		var sid1= function(a,b,c,d){ley.fillStyle="green"; ley.fillRect(a,b,c,d);}
		var sid2= function(a,b,c,d){ley.fillStyle="yellow"; ley.fillRect(a,b,c,d);}
		var sid3= function(a,b,c,d){ley.fillStyle="red"; ley.fillRect(a,b,c,d);}

		 setInterval(devut, 1000); //Demo interval

	var rel=document.getElementById('real'); //REAL CANVAS
		var perf=rel.getContext("2d");
		var w=rel.width, h=rel.height;

	function 