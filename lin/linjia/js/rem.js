function change(){
	var dwidth=document.documentElement.clientWidth;
	if(dwidth<320){
		dwidth=320;
	}
	if(isPc()&&dwidth>640){
		dwidth=640;
	}
	document.documentElement.style.fontSize = dwidth * 20 / 320 + 'px';
	if(isPc()){
		document.querySelector('html').classList.add('pc');
	}else{
		document.querySelector('html').classList.remove('pc');

	}
	
}
change();
window.onresize=change;
function isPc (){
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad",
		"iPod"
	];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
};


$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    // 如果需要分页器
    loop:true,
    speed:600,
    autoplay:5000,
    autoplayDisableOnInteraction:false,
    pagination: '.swiper-pagination'
  });
	$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$('header').addClass('on');
		}else{
			$('header').removeClass('on');
		}
	})
})
       