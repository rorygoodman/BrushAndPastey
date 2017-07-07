var itop = 1;
var ibottom=1;
var topauto=true;
var bottomauto=true;
var topbackwards=false;
var bottombackwards=false;
function slide(){
	var slide1=document.getElementById("slider1");
	var slide2=document.getElementById("slider2");
	var slide3=document.getElementById("slider3");
	var screen1=document.getElementById("screen1");
	var screen2=document.getElementById("screen2");
	var screen3=document.getElementById("screen3");
	var sltext1=document.getElementById("bslide1");
	var sltext2=document.getElementById("bslide2");
	var sltext3=document.getElementById("bslide3");
setInterval(function(){
	if(bottomauto){
		switch(ibottom){
			case 1:
				bottombackwards=false;
				ibottom=2;
				slide1.style.transform="translate(-100%,0)";
				slide2.style.transform="translate(-100%,0)";
				slide3.style.transform="translate(-100%,0)";
				
				break;

			case 2:
				if(bottombackwards){
					ibottom=1;
					slide1.style.transform="translate(0,0)";
					slide2.style.transform="translate(0,0)";
					slide3.style.transform="translate(0,0)";
				}
				else{
					ibottom=3;
					slide1.style.transform="translate(-200%,0)";
					slide2.style.transform="translate(-200%,0)";
					slide3.style.transform="translate(-200%,0)";
				}
				break;
			case 3:
				bottombackwards=true;
				ibottom=2;
				slide1.style.transform="translate(-100%,0)";
				slide2.style.transform="translate(-100%,0)";
				slide3.style.transform="translate(-100%,0)";
				break;
			default:
				ibottom=1;
		}
			
	}
	if(topauto){
		switch(itop){
			case 1:
				topbackwards=false;
				itop=2;
				screen1.style.transform="translate(-100%,0)";
				screen2.style.transform="translate(-100%,0)";
				screen3.style.transform="translate(-100%,0)";
				sltext1.style.transform="translate(-100%,0)";
				sltext2.style.transform="translate(-100%,0)";
				sltext3.style.transform="translate(-100%,0)";
				sltext1.style.opacity="0";
				sltext2.style.opacity="1";
				sltext1.style.transition="transform 2s, opacity 2s";
				sltext2.style.transition="transform 2s, opacity 2s 1s";

				
				break;

			case 2:
				if(topbackwards){
					itop=1;
					screen1.style.transform="translate(0,0)";
					screen2.style.transform="translate(0,0)";
					screen3.style.transform="translate(0,0)";
					sltext1.style.transform="translate(0,0)";
					sltext2.style.transform="translate(0,0)";
					sltext3.style.transform="translate(0,0)";
					sltext1.style.opacity="1";
					sltext2.style.opacity="0";	
					sltext1.style.transition="transform 2s, opacity 2s 1s";
					sltext2.style.transition="transform 2s, opacity 2s";
					
					
				}
				else{
					itop=3;
					screen1.style.transform="translate(-200%,0)";
					screen2.style.transform="translate(-200%,0)";
					screen3.style.transform="translate(-200%,0)";
					sltext1.style.transform="translate(-200%,0)";
					sltext2.style.transform="translate(-200%,0)";
					sltext3.style.transform="translate(-200%,0)";
					sltext2.style.opacity="0";
					sltext3.style.opacity="1";	
					sltext2.style.transition="transform 2s, opacity 2s";
					sltext3.style.transition="transform 2s, opacity 2s 1s";
				}
				break;
			case 3:
				topbackwards=true;
				itop=2;
				screen1.style.transform="translate(-100%,0)";
				screen2.style.transform="translate(-100%,0)";
				screen3.style.transform="translate(-100%,0)";
				sltext1.style.transform="translate(-100%,0)";
				sltext2.style.transform="translate(-100%,0)";
				sltext3.style.transform="translate(-100%,0)";
				sltext2.style.opacity="1";
				sltext3.style.opacity="0";	
				sltext2.style.transition="transform 2s, opacity 2s 1s";
				sltext3.style.transition="transform 2s, opacity 2s";
				break;
			default:
				itop=1;
		}
			
	}
},5000)
	
	return;
}
function noauto(slide){
	if(slide==1){
		topauto=false;
	}
	else{
		bottomauto=false;
	}
	return;
}
