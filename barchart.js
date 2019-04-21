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

 //REAL CANVAS SECTION		REAL CANVAS SECTION		REAL CANVAS SECTION		REAL CANVAS SECTION
	var rel=document.getElementById('real');
		var perf=rel.getContext("2d");		

		var collector=[];
	function many(){
		if (gen.value !=="" || gen.value >=0 ) {
		collector=[]; inputboxcontainer.innerHTML="";
		for (var i = 0; i < gen.value; i++) {addone();}}
		else{alert('Please enter a valid number');} 			}

	function addone(){
			var holder= document.createElement("input");
			holder.setAttribute( "class", 'indexofinput');
			holder.setAttribute( "type", "number");
			inputboxcontainer.appendChild(holder);
			collector.push("");  console.log(collector);}   

	function removeone(){
		document.getElementsByClassName("indexofinput")[collector.length-1].remove();
		collector.pop();
		console.log(collector);	}

	function compute(){
					var w,h,j= 20, max= -Infinity;
					rel.width= (collector.length+1)*60; w=rel.width;
					rel.height=340; h=rel.height;
				for (var i= 0; i < collector.length; i++){
					if (document.getElementsByClassName("indexofinput")[i].value===""){
						document.getElementsByClassName("indexofinput")[i].value=0;}
					collector[i]=document.getElementsByClassName("indexofinput")[i].value;
					if(Number(collector[i]) > max){ max = Number(collector[i]); } }
				 for (var i = 0; i< collector.length; i++ ) {
				 var scale= ((300/max)*0.95), b= Number(collector[i])*scale; 
			 	if (b>((2/3)*(300))){perf.fillStyle="green"; perf.fillRect(j,h-40,50,-b);}
			if (b>=((1/3)*(300)) && b<=((2/3)*(300))){perf.fillStyle="yellow"; perf.fillRect(j,h-40,50,-b);} 
				else{if (b<((1/3)*(300))) {perf.fillStyle="red"; perf.fillRect(j,h-40,50,-b);}};
			perf.strokeStyle="white"; perf.font="17px century gothic"; perf.strokeText(collector[i],j+10,h-20);
				j=j+60;}
			 console.log(max);console.log(collector); perf.strokeStyle="white";
		perf.moveTo(10,0);perf.lineTo(10,h-40);perf.lineTo(w,h-40);perf.stroke();
			perf1(0,0,10,99); perf2(0,100,10,100); perf3(0,201,10,100);
		}

	var perf1= function(a,b,c,d){perf.fillStyle="green"; perf.fillRect(a,b,c,d);}
	var perf2= function(a,b,c,d){perf.fillStyle="yellow"; perf.fillRect(a,b,c,d);}
	var perf3= function(a,b,c,d){perf.fillStyle="red"; perf.fillRect(a,b,c,d);}