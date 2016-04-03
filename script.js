var values = ['<div><span class="icon-updated"></span><span>Real-time updates</span></div><div><span class="icon-finger"></span><span>Info at your fingertips</span></div>',
'<div><span class="icon-report"></span><span>Performance reporting</span></div><div><span class="icon-branding"></span><span>Branding</span></div>',
'<div><span class="icon-schedule"></span><span>Schedules and reminders</span></div><div><span class="icon-novelty"></span><span>Novelty</span></div>',
'<div><span class="icon-time"></span><span>Time saving</span></div>'
];

var clicked = 0;
var index = 1;
document.addEventListener("DOMContentLoaded", function(event) { 
	var svg;
	document.getElementById('svgObj').addEventListener("load",function(){
    	svg = this.contentDocument.querySelector('svg');
		svg.style.width = '100%';
		svg.getElementById('circs').style.transformOrigin= "357px 428.5px 0px";
		svg.getElementById('circs').style.transition= "transform 1s ease";
		var cirs = svg.querySelectorAll('.why-cir');
		var arr=[120,25,312,200];
		function animate(){
			setTimeout(function(){
				if(clicked) return;
				handleEvent(svg,(document.body.clientWidth<768)? ((arr[index%4]+90)%360):arr[index%4],values[index%4],index%4,0)();
				index--;
				if(index==-1) index=3;
				if(!clicked) animate();
			},5000);
		}
		animate();
		for(var i=0;i<cirs.length;i++) {
			cirs[i].addEventListener("click",handleEvent(svg,(document.body.clientWidth<768)? ((arr[i%4]+90)%360):arr[i%4],values[i%4],i%4,1));
		}
    });
    
});
function handleEvent(svg,deg,value,ind,clk) {
    return function() {
		clicked = (clicked||clk);
    	var cirs = svg.querySelectorAll('.why-cir');
    	document.querySelectorAll('.values')[1].innerHTML = value;
        svg.getElementById('circs').style.transform="rotate("+deg+"deg)"; 
        var pics = svg.querySelectorAll('.pic');
        for(var i=0;i<pics.length;i++) {
			pics[i].style.transform="rotate("+(deg*-1)+"deg)";
			pics[i].style.transformOrigin='center';
			pics[i].style.transition= "transform 1s ease";
			cirs[i].style.fill= "#06e";
		}
		cirs[ind].style.fill="#08f";
    };
}
function mail(){
	var r = document.querySelectorAll('input[type="radio"]');
	for(var i=0;i<3;i++) r[i].disabled=false;
	document.getElementById('demo').style.display='none';
}
function enablePlans(){
	document.getElementsByName('isdemo')[0].value=0;
	var r = document.querySelectorAll('input[type="radio"]');
	for(var i=0;i<3;i++) r[i].disabled=false;
}
function disablePlans(){
	document.getElementsByName('isdemo')[0].value=1;
	var r = document.querySelectorAll('input[type="radio"]');
	for(var i=0;i<3;i++) r[i].disabled=true;
		r[1].checked=true;
}
function openDemo(e){
	disablePlans();
	if(e.innerText=="Choose a plan") enablePlans();
	document.getElementById('demo').style.display='block';
}