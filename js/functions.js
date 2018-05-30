var overlay = document.getElementById("loading");
var time = new Date().getTime()/1000;
var load = document.getElementById("load_everything");
load.style.display = 'none';

window.addEventListener('load', function(){
	var elapsed = new Date().getTime() / 1000 - time;
	while(elapsed <= 1 ){
		elapsed = new Date().getTime() / 1000 - time;
	}
	load.style.display = 'initial';
	overlay.style.display = 'none';
})