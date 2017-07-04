var i = 1;
var backwards=false;
function slide(){
	var slide1=document.getElementById("slider1");
	var slide2=document.getElementById("slider2");
	var slide3=document.getElementById("slider3");
setInterval(function(){
	switch(i){
		case 1:
			backwards=false;
			i=2;
			slide1.style.transform="translate(-100%,0)";
			slide2.style.transform="translate(-100%,0)";
			slide3.style.transform="translate(-100%,0)";
			break;

		case 2:
			if(backwards){
				i=1;
				slide1.style.transform="translate(0,0)";
				slide2.style.transform="translate(0,0)";
				slide3.style.transform="translate(0,0)";
			}
			else{
				i=3;
				slide1.style.transform="translate(-200%,0)";
				slide2.style.transform="translate(-200%,0)";
				slide3.style.transform="translate(-200%,0)";
			}
			break;
		case 3:
			backwards=true;
			i=2;
			slide1.style.transform="translate(-100%,0)";
			slide2.style.transform="translate(-100%,0)";
			slide3.style.transform="translate(-100%,0)";
			break;
		default:
			i=1;
			
	}
},5000)
	
	return;
}