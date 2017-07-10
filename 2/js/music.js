$(function  () {
	  var nn=0;
	  var flaa=true;
$('#yin img')[0].addEventListener('touchstart',touchStarty,false);
function touchStarty () {
	flaa=false;
	event.preventDefault();
	nn++;
	if (nn%2) {
		$('#yin img')[0].style.webkitTransform='translateX(-30px)';
		$('audio')[0].pause();
		saa=0;

	}else {
		$('#yin img')[0].style.webkitTransform='translateX(0px)';
		$('audio')[0].play();
	}
	
	
   
}
document.body.addEventListener('touchmove', function (event) {
	if (flaa) {
	  flaa=false;
    $('audio')[0].play();
	}
}, false);
})