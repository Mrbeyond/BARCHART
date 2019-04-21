	var dem=document.getElementById('demo'); //DEMO CANVAS
		var ley=dem.getContext("2d");
		var txt=dem.getContext("2d");		 		
		var x=dem.width, y=dem.height;

//function for the demo		
function devut(){
		ley.clearRect(0,0,x,y); txt.clearRect(0,0,x,y); var a=40;
		ley.moveTo(10,0);ley.lineTo(10,y-30);ley.lineTo(x,y-30);ley.strokeStyle="white";ley.stroke();//block sit for the bars
//beginnig of loop for plotting 6 bars with random height
		for (var i = 0; i<6; i++) {			
		var	b=	Math.round(Math.random()*(0.89*y)); //random height
//the bars are given colors
			 	if (b>200) {ley.fillStyle="green"; ley.fillRect(a,y-30,30,-b);}
			if (b>=100 && b<=200){ley.fillStyle="yellow"; ley.fillRect(a,y-30,30,-b);} 
				else{if (b<100) {ley.fillStyle="red"; ley.fillRect(a,y-30,30,-b);}};
//text are written and positioned below each bar
			txt.strokeText(b,a+5,y-7); txt.font="17px century gothic";txt.stokeStyle="white";
//parameterized side bar colors to indicate the level of each data
				a=a+40; sid1(0,0,10,99);sid2(0,100,10,100);sid3(0,201,10,90); }    }

function sid1(a,b,c,d){ley.fillStyle="green"; ley.fillRect(a,b,c,d);}
function sid2(a,b,c,d){ley.fillStyle="yellow"; ley.fillRect(a,b,c,d);}
function sid3(a,b,c,d){ley.fillStyle="red"; ley.fillRect(a,b,c,d);}
//Interval is set to keep changing changing the Demo barchart
setInterval(devut, 1000); //Demo interval  END of Demo bar chart

 //REAL CANVAS SECTION		REAL CANVAS SECTION		REAL CANVAS SECTION		REAL CANVAS SECTION
	var rel=document.getElementById('real');
		var perf=rel.getContext("2d");		

		var collector=[]; // empty array to control data
		//function many that invokes function Addone according to number of input with loop
	function many(){
		if (gen.value !=="" && gen.value >=0 ) {
		collector=[]; inputboxcontainer.innerHTML="";
		for (var i = 0; i < gen.value; i++) {addone();}}else{
			gen.focus(); alert('Please enter a valid number'); } 	}

	// thanks to this function below(+1) that  adds attributes, generate index in array, and creates input element
	function addone(){
			var holder= document.createElement("input");
			holder.setAttribute( "class", 'indexofinput');
			holder.setAttribute( "type", "number");
			holder.setAttribute( "id", "inputId"); holder .focus();
			holder.addEventListener('keyup', compute); //this helps to invoke funtion compute as the input changes
			inputboxcontainer.appendChild(holder);			
			collector.push("");  console.log(collector);} 	   
// functionremoved obviously remove (pop) an index from the array collector
	function removeone(){
		document.getElementsByClassName("indexofinput")[collector.length-1].remove();
		collector.pop();
		console.log(collector);	}

//function compute is a very classic function that plots the graph
function compute(){
		var w,h,j= 20, max= -Infinity; 
		rel.width= (collector.length+1)*60; w=rel.width;rel.height=340; h=rel.height;
		  for (var i= 0; i < collector.length; i++){					
			if (document.getElementsByClassName("indexofinput")[i].value===""){
		     collector[i]=0;} //assigning inputs value to the array
			 collector[i]=Number(document.getElementsByClassName("indexofinput")[i].value);
			if(collector[i] > max){ max = collector[i]; } } //max is discovered from the array to be used for scaling
 // the loop below plots the graph, the text, does the scaling and compute each data corresponding with scale 
			for (var i = 0; i< collector.length; i++ ) { 
			 if (collector[i]>=0){
			 var scale= ((300/max)*0.95), b= collector[i]*scale; 
			 if (b>((2/3)*(300))){perf.fillStyle="green"; perf.fillRect(j,h-40,50,-b);}//the color section with data value
			if (b>=((1/3)*(300)) && b<=((2/3)*(300))){perf.fillStyle="yellow"; perf.fillRect(j,h-40,50,-b);} //the color section with data value
			else{if (b<((1/3)*(300))) {perf.fillStyle="red"; perf.fillRect(j,h-40,50,-b);}};//the color section with data value
//text are written and positioned below each bar			
			perf.strokeStyle="white"; perf.font="17px century gothic"; perf.strokeText(collector[i],j+10,h-20);
			j=j+60;} else{alert('Please enter a valid number in box numer '+(i+1)); } }
			console.log(max);console.log(collector); perf.strokeStyle="white";
			perf.moveTo(10,0);perf.lineTo(10,h-40);perf.lineTo(w,h-40);perf.stroke();
//parameterized side bar with color as indicator
			perf1(0,0,10,99); perf2(0,100,10,100); perf3(0,201,10,100); 
		}

function perf1(a,b,c,d){perf.fillStyle="green"; perf.fillRect(a,b,c,d);}
function perf2(a,b,c,d){perf.fillStyle="yellow"; perf.fillRect(a,b,c,d);}
function perf3(a,b,c,d){perf.fillStyle="red"; perf.fillRect(a,b,c,d);}