var visited=[false,false,false];
document.addEventListener("DOMContentLoaded", function(event) { 
	window.onscroll = function(){
		//50% : 
		var scrolled = document.body.scrollTop;
		if(scrolled>=document.body.clientHeight*0.5&&!visited[0])
		{
			visited[0]=true;
			document.getElementById('cir2').style.display = 'block';
			setTimeout(function(){
				document.getElementById('cir2').style.position = 'relative';
				document.getElementById('cir').style.display = 'none';
			},1000);
		}
		if(scrolled>=document.body.clientHeight*1.25&&!visited[1])
		{
			visited[1]=true;
			animatePercentage();
		}
		if(scrolled>=document.body.clientHeight*2.25&&!visited[2])
		{
			visited[2]=true;
			document.getElementById('p1').style.transform = 'translateY(100%)';
		}
	}
});
function pieStyle(val){
	var s1 = 'none';
	var s2 = 'linear-gradient('+(90+(val%50)*360/100)+'deg, transparent 50%, #eee 50%),linear-gradient(90deg, #eee 50%, transparent 50%)';
	var s3 = 'linear-gradient('+(90+(val%50)*360/100)+'deg, transparent 50%, #07f 50%),linear-gradient(90deg, #eee 50%, transparent 50%)';
	if(val==100) return s1;
	if(val<50) return s2;
	return s3;
}
var i=0;
function animatePercentage(){
	document.querySelector('.pie-chart').style.backgroundImage=pieStyle(i);
	document.querySelector('.pie-chart span').innerHTML = i++;
	if(i<91)setTimeout(animatePercentage,7);
}