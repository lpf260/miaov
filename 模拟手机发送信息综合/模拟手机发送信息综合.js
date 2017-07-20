
var oDiv1 = document.getElementById("div1");
var oImg1 = document.getElementById("img1");
var oText = document.getElementById("text");
var oBtn = document.getElementById("btn");

var onOff = true;
oImg1.onclick = function(){
if(onOff){
	oImg1.src = "img/head2.jpg";
	onOff = false;
}
else{
	oImg1.src = "img/head1.jpg";
	onOff = true;
}
}


var times =1;
oBtn.onclick = function(){
if(oText.value == ''){
	alert("你还没说话呢~");
}
else{
	if(onOff){

		var oImg2 = document.createElement("img");
		oImg2.src = 'img/head1.jpg';
		var oSpan = document.createElement("span");
		var oSpanText = document.createTextNode(oText.value);
		oSpan.appendChild(oSpanText);
		if(times==1){
			oDiv1.appendChild(oImg2);
			oDiv1.appendChild(oSpan);
			times++;
		}
		else{
			var elements = oDiv1.getElementsByTagName("*");
			oDiv1.insertBefore(oSpan,elements[0]);
			oDiv1.insertBefore(oImg2,oSpan);
		}
		oImg2.className = "left";
		oSpan.className = "girl";
		
	}
	else{
		var oImg3 = document.createElement("img");
		oImg3.src = 'img/head2.jpg';
		var oSpan = document.createElement("span");
		var oSpanText = document.createTextNode(oText.value);
		oSpan.appendChild(oSpanText);
		if(times==1){
			oDiv1.appendChild(oImg3);
			oDiv1.appendChild(oSpan);
			times++;
		}
		else{
			var elements = oDiv1.getElementsByTagName("*");
			oDiv1.insertBefore(oSpan,elements[0]);
			oDiv1.insertBefore(oImg3,oSpan);
		}
		
		oImg3.className = "right";
		oSpan.className = "boy";
	}
}
oText.value='';

}