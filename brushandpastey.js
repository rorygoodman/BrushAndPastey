var itop = 1;
var ibottom=1;
var topauto=true;
var bottomauto=true;
var topbackwards=false;
var bottombackwards=false;
function slide(){
	var overlay=document.getElementById("overlay");
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
				slide2.style.opacity="1";
				slide3.style.opacity="0";
				slide1.style.zIndex="0";
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
					slide1.style.opacity="0";
					slide3.style.opacity="1";
					slide1.style.transform="translate( 100%,0)";
					slide2.style.transform="translate(-200%,0)";
					slide3.style.transform="translate(-200%,0)";
				}
				break;
			case 3:
				//bottombackwards=true;
				ibottom=1;
				slide1.style.opacity="1";
				slide2.style.opacity="0";
				slide1.style.transform="translate(0,0)";
				slide2.style.transform="translate(0,0)";
				slide3.style.transform="translate(-300%,0)";
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
},8000)
	
	return;
}
function bottommove(backwards){
	bottomauto=false;
	bottombackwards=backwards;
	var slide1=document.getElementById("slider1");
	var slide2=document.getElementById("slider2");
	var slide3=document.getElementById("slider3");
	switch(ibottom){
			case 1:
				if(!bottombackwards){
					ibottom=2;
					slide2.style.opacity="1";
					slide3.style.opacity="0";
					slide1.style.transform="translate(-100%,0)";
					slide2.style.transform="translate(-100%,0)";
					slide3.style.transform="translate(-100%,0)";
				}
				else{
					ibottom=3;
					slide2.style.opacity="0";
					slide3.style.opacity="1";
					slide1.style.transform="translate(100%,0)";
					slide2.style.transform="translate(-200%,0)";
					slide3.style.transform="translate(-200%,0)";
				}
				break;

			case 2:
				if(bottombackwards){
					slide1.style.opacity="1";
					slide3.style.opacity="0";
					ibottom=1;
					slide1.style.transform="translate(0,0)";
					slide2.style.transform="translate(0,0)";
					slide3.style.transform="translate(-300%,0)";
				}
				else{
					ibottom=3;
					slide1.style.opacity="0";
					slide3.style.opacity="1";
					slide1.style.transform="translate( 100%,0)";
					slide2.style.transform="translate(-200%,0)";
					slide3.style.transform="translate(-200%,0)";
				}
				break;
			case 3:
				if(bottombackwards){
					ibottom=2;
					slide1.style.opacity="0";
					slide2.style.opacity="1";
					slide1.style.transform="translate(-100%,0)";
					slide2.style.transform="translate(-100%,0)";
					slide3.style.transform="translate(-100%,0)";
					
				}
				else{
					ibottom=1;
					slide1.style.opacity="1";
					slide2.style.opacity="0";
					slide1.style.transform="translate(0,0)";
					slide2.style.transform="translate(0,0)";
					slide3.style.transform="translate(-300%,0)";
				}
				break;
			default:
				ibottom=1;
		}
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
function banner(textno){
	var overlay=document.getElementById("overlay");
	var banner=document.getElementById("banner");
	//var title=document.getElementById("title");
	//var text=document.getElementById("text");
	if(textno==1){
		//title.innerHTML="Aims";
		//text.innerHTML="Our first product is an oral health app for children, designed to motivate and educate children about their oral health through fun an interactive games. Based on science, and made with a friendly design, the app offers real rewards for good dental hygiene behaviour."
	}
	else{
		//title.innerHTML="OtherText";
		//text.innerHTML="More text. The best text. My text? It's unbelievable, fantastic. Their text, their text is bad, terrible. You know what they used to do to text like that? It'd be out of here on a stretcher folks."
	}
	overlay.style.display="block";
	overlay.style.opacity="1";
	overlay.style.zIndex="10";
	banner.style.zIndex="12";
	banner.style.opacity="1";
	banner.style.transform="rotateX(0)";
	return;
}
function nobanner(rotate){
	var overlay=document.getElementById("overlay");
	var banner=document.getElementById("banner");
	overlay.style.opacity="0";
	if (rotate){
		banner.style.transform="rotateX(90deg)";
	}
	setTimeout(function(){
		overlay.style.zIndex="-1";
		banner.style.zIndex="-1";
	},1000)
	return;
}
