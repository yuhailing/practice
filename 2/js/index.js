$(function  () {
	var iframes=$('.ifone').attr('src', $('.ifone').attr('ifsrc'));
	document.addEventListener('touchmove',function(event){
	            event.preventDefault();
				},false);
   function now(){
    var mySwiper = new Swiper('.sliderOne',{
	     direction: 'vertical',
			 loop : true,
	mousewheelControl: true,
	pagination : '.oneArc',
	watchSlidesProgress: true,
	onInit: function(swiper) {
		swiper.myactive = 0;
	},
	onProgress: function(swiper) {
		for (var i = 0; i < swiper.slides.length; i++) {
			var slide = swiper.slides[i];
			var progress = slide.progress;
			var translate, boxShadow;

			translate = progress * swiper.height * 0.8;
			scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
			boxShadowOpacity = 0;

			slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';

			if (i == swiper.myactive) {
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
				es.zIndex=0;


			}else{
				es = slide.style;
				es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
				es.zIndex=1;
				
			}

		}

	},


	onTransitionEnd: function(swiper, speed) {
		//alert(swiper.activeIndex-1);
		//alert($('.sliderOne .swiper-slide').eq(swiper.activeIndex-1).find('*').length)
		$('.sliderOne .kong').eq(swiper.activeIndex-1).find('*').each(function(index,obj){
		   $(obj).removeClass($(obj).attr('cl'))
		});
		   $('.sliderOne .kong').eq(swiper.activeIndex+1).find('*').each(function(index,obj){
		   $(obj).removeClass($(obj).attr('cl'))
		});
		  if (swiper.activeIndex==3) {
			   $('.divs-money').show();
			   iframes.appendTo('.divs-money');
		   }else{
		       $('.divs-money').hide();
			   $('.ifone').remove();
			 }
		$('.sliderOne .kong').eq(swiper.activeIndex).find('*').each(function(index,obj) {
		$(obj).addClass($(obj).attr('cl'));
		
	})
		/*
		for (var i = 0; i < swiper.slides.length; i++) {
		//	es = swiper.slides[i].style;
		//	es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = '';

		//	swiper.slides[i].style.zIndex = Math.abs(swiper.slides[i].progress);

			
		}*/

		swiper.myactive = swiper.activeIndex;

	},
	onSetTransition: function(swiper,speed) {

		for (var i = 0; i < swiper.slides.length; i++) {
			//if (i == swiper.myactive) {
				es = swiper.slides[i].style;
				es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
			//}
		}

	}


	});
	var num=0;
    setInterval(function(){
		num++;
		if (num>=2) {
			num=0
		}
		$('.two-div img').hide().eq(num).show();
    },500);
	
}




	
  //loading“≥√Ê
  $('audio')[0].pause();
      var numt=0;
	  var img_le=$('img').length;
	for (var t=0; t<$('img').length; t++) {
		var imge=new Image();
		imge.src=$('img')[t].src;
		imge.onload=function  () {
			numt++;
			$('#loading i').html(parseInt(100*numt/img_le)+'%')
			if (numt>=($('img').length-2)) {
				$('#loading').hide();
				$('audio')[0].play();
				now();
				
					
			}
		}
	}
   //loading“≥√Ê
})