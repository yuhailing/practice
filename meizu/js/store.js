$(function(){
	//header-hover--start
	(function(){
		var dom={
			body:$('.header'),
			list:$('.header li')
		}
		dom.list.hover(function(){
			$(this).addClass('active');
			$(this).find('a').each(function(index,obj){
				obj.style.transitionDelay=index*0.06+0.1+'s';
				$(obj).removeClass('opacity');
			});
			dom.body.addClass('on');
		},function(){
			$(this).removeClass('active');
			$(this).find('a').each(function(index,obj){
				obj.style.transitionDelay='0s';
				$(obj).removeClass('opacity');
			});
			dom.body.removeClass('on');
		});
		dom.list.find('a').hover(function(){
			$(this).parent().children('').addClass('opacity')
		},function(){
			$(this).parent().children('').removeClass('opacity')
		})
	})()
	//header-hover--end
	//slider--start
	$('.slider').unslider({
		autoplay:true,
		animation:'fade',
		arrows: {
		//  Unslider default behaviour
		prev: '<a href="javascript:;" class="unslider-arrow prev"><i class="iconfont icon-arrowleft"></i></a>',
		next: '<a href="javascript:;" class="unslider-arrow next"><i class="iconfont icon-arrowright"></i></a>',

		// //  Example: generate buttons to start/stop the slider autoplaying
		// stop: '<a class="unslider-pause" />',
		// start: '<a class="unslider-play">Play</a>'
		}
	});
	$('.unslider-nav li').hover(function(){
		$(this).trigger('click');
	});
	$('.slider1').unslider({
		autoplay:true,
		// animation:'fade',
		delay:5000,
		nav:false,
		arrows: {
		//  Unslider default behaviour
		prev: '<a href="javascript:;" class="unslider-arrow prev"><i class="iconfont icon-arrowleft"></i></a>',
		next: '<a href="javascript:;" class="unslider-arrow next"><i class="iconfont icon-arrowright"></i></a>',

		// //  Example: generate buttons to start/stop the slider autoplaying
		// stop: '<a class="unslider-pause" />',
		// start: '<a class="unslider-play">Play</a>'
		}
	});
	$('.home-hot-header .ctrl a').eq(0).click(function(){
		$('.slider1').parent().find('.prev').click();
	}).next().click(function(){
		$('.slider1').parent().find('.next').click();
	})
	//slider--end
	// 耳机选项卡
	$('.content-middle').hover(function(){
		var $t=$(this);
		var $parent=$t.parents('.home-floor-content');
		var $homes=$parent.find('.home-content-img');
		$t.addClass('active').siblings().removeClass('active');
		$homes.eq($t.index()-1).addClass('active').siblings().removeClass('active');
	})

})









