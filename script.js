document.addEventListener("DOMContentLoaded", function(event) { 
	var svg;
	document.getElementById('svgObj').addEventListener("load",function(){
    	svg = this.contentDocument.querySelector('svg');
		svg.style.width = '100%';
    });
});
