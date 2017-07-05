var i = 1;
var backwards=false;
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
	switch(i){
		case 1:
			backwards=false;
			i=2;
			slide1.style.transform="translate(-100%,0)";
			slide2.style.transform="translate(-100%,0)";
			slide3.style.transform="translate(-100%,0)";
			screen1.style.transform="translate(-100%,0)";
			screen2.style.transform="translate(-100%,0)";
			screen3.style.transform="translate(-100%,0)";
			sltext1.style.transform="translate(-100%,0)";
			sltext2.style.transform="translate(-100%,0)";
			sltext3.style.transform="translate(-100%,0)";
			
			break;

		case 2:
			if(backwards){
				i=1;
				slide1.style.transform="translate(0,0)";
				slide2.style.transform="translate(0,0)";
				slide3.style.transform="translate(0,0)";
				screen1.style.transform="translate(0,0)";
				screen2.style.transform="translate(0,0)";
				screen3.style.transform="translate(0,0)";
				sltext1.style.transform="translate(0,0)";
				sltext2.style.transform="translate(0,0)";
				sltext3.style.transform="translate(0,0)";
			}
			else{
				i=3;
				slide1.style.transform="translate(-200%,0)";
				slide2.style.transform="translate(-200%,0)";
				slide3.style.transform="translate(-200%,0)";
				screen1.style.transform="translate(-200%,0)";
				screen2.style.transform="translate(-200%,0)";
				screen3.style.transform="translate(-200%,0)";
				sltext1.style.transform="translate(-200%,0)";
				sltext2.style.transform="translate(-200%,0)";
				sltext3.style.transform="translate(-200%,0)";
			}
			break;
		case 3:
			backwards=true;
			i=2;
			slide1.style.transform="translate(-100%,0)";
			slide2.style.transform="translate(-100%,0)";
			slide3.style.transform="translate(-100%,0)";
			screen1.style.transform="translate(-100%,0)";
			screen2.style.transform="translate(-100%,0)";
			screen3.style.transform="translate(-100%,0)";
			sltext1.style.transform="translate(-100%,0)";
			sltext2.style.transform="translate(-100%,0)";
			sltext3.style.transform="translate(-100%,0)";
			break;
		default:
			i=1;
			
	}
},5000)
	
	return;
}