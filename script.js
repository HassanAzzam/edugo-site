var values = ['<div><span class="icon-updated"></span><span>Real-time updates</span></div><div><span class="icon-finger"></span><span>Info at your fingertips</span></div>',
'<div><span class="icon-report"></span><span>Performance reporting</span></div><div><span class="icon-branding"></span><span>Branding</span></div>',
'<div><span class="icon-schedule"></span><span>Schedules and reminders</span></div><div><span class="icon-novelty"></span><span>Novelty</span></div>',
'<div><span class="icon-time"></span><span>Time saving</span></div>'
];

document.addEventListener("DOMContentLoaded", function(event) { 
	var svg;
	document.getElementById('svgObj').addEventListener("load",function(){
    	svg = this.contentDocument.querySelector('svg');
		svg.style.width = '100%';
		svg.getElementById('circs').style.transformOrigin= "357px 428.5px 0px";
		svg.getElementById('circs').style.transition= "transform 1s ease";
		var cirs = svg.querySelectorAll('.why-cir');
		var arr=[120,25,312,200];
		for(var i=0;i<cirs.length;i++) {
			cirs[i].addEventListener("click",handleEvent(svg,arr[i%4],values[i%4]));
		}
    });
	window.onscroll=function(){
		if(document.body.scrollTop>=document.body.clientHeight*.75)
			document.querySelector('.values').style.display="block";
	};
    
});
function handleEvent(svg,deg,value) {
    return function(e) {
    	document.querySelectorAll('.values')[1].innerHTML = value;
        svg.getElementById('circs').style.transform="rotate("+deg+"deg)"; 
        var pics = svg.querySelectorAll('.pic');
        for(var i=0;i<pics.length;i++) {
			pics[i].style.transform="rotate("+(deg*-1)+"deg)";
			pics[i].style.transformOrigin='center';
			pics[i].style.transition= "transform 1s ease";
		}
    };
}