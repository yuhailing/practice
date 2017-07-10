$(function(){
//左侧li点击，右侧对应的产品显示
	$('.right-pro .product').eq(0).addClass('pro-show');
	$('.left-list li').click(function(){
		var index=$(this).index();
		$(this).addClass('li-addbg').siblings().removeClass('li-addbg');
		$('.right-pro .product').eq(index).fadeIn().siblings().fadeOut();
	})
//热搜标签点击加背景色
	$('.product .hot a').click(function(){
		$(this).addClass('hot-addbg').siblings().removeClass('hot-addbg');
	})
})
