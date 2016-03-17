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
			cirs[i].addEventListener("click",handleEvent(svg,arr[i%4]));
		}
    });
});
function handleEvent(svg,deg) {
    return function(e) {
        svg.getElementById('circs').style.transform="rotate("+deg+"deg)"; 
        var pics = svg.querySelectorAll('.pic');
        for(var i=0;i<pics.length;i++) {
			pics[i].style.transform="rotate("+(deg*-1)+"deg)";
			pics[i].style.transformOrigin='center';
			pics[i].style.transition= "transform 1s ease";
		}
    };
}