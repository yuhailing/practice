var saa=1;
    $('.fen')[0].addEventListener('touchstart',function  () {
		$(this).hide().css({opacity:0});
    },false); 
	$('.last-p')[0].addEventListener('touchstart',function  () {
		$('.fen').show().css({opacity:1});
    },false);    
     var nn=0;
$('#yin img')[0].addEventListener('touchstart',touchStarty,false);
function touchStarty () {
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

var PageTransitions = (function() {
	
		var saa=1;
	var nexts=1;
	var wi=$(window).width();
	var hi=$(window).height();
	$(window).resize(function  () {
        wi=$(window).width();
	    hi=$(window).height();
	})
	var flag=false;	
	var lis=$('.pt-page');
	var le=lis.length;
    var startX,startY,Y,tone,ss;
	var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( '#iterateEffects' ),
		animcursor = 1,
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
	
	function init() {

		$pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );

		$( '#dl-menu' ).dlmenu( {
			animationClasses : { in : 'dl-animate-in-2', out : 'dl-animate-out-2' },
			onLinkClick : function( el, ev ) {
				ev.preventDefault();
				nextPage( el.data( 'animation' ) );
			}
		} );

		$iterate.on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( animcursor > 67 ) {
				animcursor = 1;
			}
			nextPage( animcursor );
			++animcursor;
		} );
		//self-start
			var numt=0;
	for (var t=0; t<$('img').length; t++) {
		var imge=new Image();
		imge.src=$('img')[t].src;
		imge.onload=function  () {
			numt++;
			if (numt>=($('img').length-1)) {
				$('audio')[0].play();
				$('#loading').addClass('opa-loading');
				setTimeout(function (){
					page_one();
					$('#loading').hide()
				},1000)
					
			}
		}
	}
		 for (var i=0; i<le; i++) {
		lis[i].index=i;
		lis[i].addEventListener('touchstart',touchStart,false);  
		lis[i].addEventListener('touchmove',touchMove,false);  
		lis[i].addEventListener('touchend',touchEnd,false);  
	}
	function touchStart(event) {
		Y=0;
    //阻止网页默认动作（即网页滚动）
    //event.preventDefault();
    var touch = event.touches[0];
    startY = touch.pageY;
}
function touchMove(event) {
    //阻止网页默认动作（即网页滚动）
    event.preventDefault();
    var touch = event.touches[0];
    Y=touch.pageY-startY;
   // document.title=Y
}
function touchEnd(event) {
    //阻止网页默认动作（即网页滚动）
   event.preventDefault();

    var touch = event.touches[0];
    //alert(Y)
    //next
	if (flag) {
	   flag=false;
	   var sett=setTimeout(function (){
		flag=true;
	},2000)
    if (Y<-20) {
		//alert(1)
    	nexts=1;
    		animcursor = aaa;
    	nextPage( animcursor )
    
    }else if (Y>20) {
    	nexts=0;
    	animcursor = aaa+1;
    	nextPage( animcursor )

    };
	
	if (this.index==0) {
		
	    
		 if (Y<-20){
		 page_two(); 
		 if (saa) { 
			 $('audio')[0].play();
		 }
		
		 }else if(Y>20) {
		    page_last();	
		}
	}else if(this.index==1) {
		if (Y>20) {
			page_one();
		}else if(Y<-20) {
		    page_three();	
		}
	}else if(this.index==2) {
		if (Y>20) {
			page_two();
		}else if(Y<-20) {
		    page_four();	
		}
	}else if(this.index==3) {
		if (Y>20) {
			page_three();
		}else if(Y<-20) {
		    page_five();	
		}
	}else if(this.index==4) {
		if (Y>20) {
			page_four();
		}else if(Y<-20) {
		    page_six();	
		}
	}else if(this.index==5) {
		if (Y>20) {
			page_five();
		}else if(Y<-20) {
		    page_seven();	
		}
	}else if(this.index==6) {
		if (Y>20) {
			page_six();
		}else if(Y<-20) {
		    page_eight();	
		}
	}else if(this.index==7) {
		if (Y>20) {
			page_seven();
		}else if(Y<-20) {
		    page_night();	
		}
	}else if(this.index==8) {
		if (Y>20) {
			page_eight();
		}else if(Y<-20) {
		    page_ten();	
		}
	}else if(this.index==9) {
		if (Y>20) {
			page_night();
		}else if(Y<-20) {
		    page_eleven();	
		}
	}else if(this.index==10) {
		if (Y>20) {
			page_ten();
		}else if(Y<-20) {
		    page_twelve();	
		}
	}else if(this.index==11) {
		if (Y>20) {
			page_eleven();
		}else if(Y<-20) {
		    page_last();	
		}
	}else if(this.index==12) {
		if (Y>20) {
			page_twelve();
		}else if(Y<-20) {
		    page_one();	
		}
	}
	/**/
}
	}
		//self-end

	}
	//page_one();
	setTimeout(function (){
		flag=true;
	},2000)
  function page_one () {
	  
	  setTimeout(function (){
		   back_two();
		   back_last();
		   
	   },1000)
        $('.one-font').addClass('opa');
		$('.one-pic1').addClass('opa-blur');
		$('.one-pic2').addClass('opa');
  }
  function back_one () {
	   $('.one-font').removeClass('opa');
		$('.one-pic').removeClass('opa-blur');
		$('.one-pic2').removeClass('opa');
  }
  function page_two () {
	  
	   setTimeout(function (){
		   back_one();
		   back_three();
		   
	   },1000)
	  $('.two-top1,.two-bottom1').addClass('opa-blur');
	  $('.two-top2,.two-bottom2').addClass('opa');
	  $('.two-font').addClass('opa')
  }
  function back_two () {
	  $('.two-top1,.two-bottom1').removeClass('opa-blur');
	  $('.two-top2,.two-bottom2').removeClass('opa');
	  $('.two-font').removeClass('opa')
  }
  function page_three () {
	  
	   setTimeout(function (){
		   back_two();
		   back_four();
		   
	   },1000)
      $('.three-font').addClass('opa');
	   $('.three-pic1').addClass('opa-blur');
	   $('.three-pic2').addClass('opa');
  }
   function back_three () {
      $('.three-font').removeClass('opa');
	   $('.three-pic1').removeClass('opa-blur');
	   $('.three-pic2').removeClass('opa');
  }
  function page_four () {
	  
	   setTimeout(function (){
		   back_three();
		   back_five();
		   
	   },1000)
      $('.four-font').addClass('opa');
	   $('.four-pic1').addClass('opa-blur');
	   $('.four-pic2').addClass('opa');
  }
   function back_four () {
      $('.four-font').removeClass('opa');
	   $('.four-pic1').removeClass('opa-blur');
	   $('.four-pic2').removeClass('opa');
  }
  function page_five () {
	  
	   setTimeout(function (){
		   back_four();
		   back_six();
		   
	   },1000)
	  $('.five-top1,.five-bottom1').addClass('opa-blur');
	  $('.five-top2,.five-bottom2').addClass('opa');
	  $('.five-font').addClass('opa')
  }
	  function back_five () {
	  $('.five-top1,.five-bottom1').removeClass('opa-blur');
	  $('.five-top2,.five-bottom2').removeClass('opa');
	  $('.five-font').removeClass('opa')
  }
	  function page_six () {
		  
	   setTimeout(function (){
		   back_five();
		   back_seven();
		   
	   },1000)
	  $('.six-top1,.six-bottom1').addClass('opa-blur');
	  $('.six-top2,.six-bottom2,.six-top2-1,.six-bottom2-1').addClass('opa');
	  $('.six-font').addClass('opa')
		
  }
	  function back_six () {
	  $('.six-top1,.six-bottom1').removeClass('opa-blur');
	  $('.six-top2,.six-bottom2,.six-top2-1,.six-bottom2-1').removeClass('opa');
	  $('.six-font').removeClass('opa')
  }
	   function page_seven () {
		   
	   setTimeout(function (){
		   back_six();
		   back_eight();
		   
	   },1000)
	  $('.seven-top1,.seven-bottom1').addClass('opa-blur');
	  $('.seven-top2,.seven-bottom2,.seven-top2-1,.seven-bottom2-1').addClass('opa');
	  $('.seven-font').addClass('opa')
  }
	  function back_seven () {
	  $('.seven-top1,.seven-bottom1').removeClass('opa-blur');
	   $('.seven-top2,.seven-bottom2,.seven-top2-1,.seven-bottom2-1').removeClass('opa');
	  $('.seven-font').removeClass('opa')
  }
	  function page_eight (){
		  
		  setTimeout(function (){
		   back_seven();
		   back_night();
		   
	   },1000)
	  $('.eight-pic1').addClass('opa-blur');
	  $('.eight-pic2').addClass('opa');
	  $('.eight-font').addClass('opa');
	  }
	  function back_eight (){
	  $('.eight-pic1').removeClass('opa-blur');
	  $('.eight-pic2').removeClass('opa');
	  $('.eight-font').removeClass('opa');
	  }
	  function page_night (){
		  
		  setTimeout(function (){
		   back_eight();
		   back_ten();
		   
	   },1000)
	  $('.night-pic1').addClass('opa-blur');
	  $('.night-pic2,.night-pic2-1,.night-pic2-2,.night-pic2-3').addClass('opa');
	  $('.night-font').addClass('opa');
	  }
	  function back_night (){
	  $('.night-pic1').removeClass('opa-blur');
	  $('.night-pic2,.night-pic2-1,.night-pic2-2,.night-pic2-3').removeClass('opa');
	  $('.night-font').removeClass('opa');
	  }
	  function page_ten (){
		  
		  setTimeout(function (){
		   back_night();
		   back_eleven();
		   
	   },1000)
	  $('.ten-pic1').addClass('opa-blur');
	  $('.ten-pic2').addClass('opa');
	  $('.ten-font').addClass('opa');
	  }
	  function back_ten (){
	  $('.ten-pic1').removeClass('opa-blur');
	  $('.ten-pic2').removeClass('opa');
	  $('.ten-font').removeClass('opa');
	  }
	  function page_eleven (){
		  
		  setTimeout(function (){
		   back_ten();
		   back_twelve();
		   
	   },1000)
	  $('.eleven-pic1').addClass('opa-blur');
	  $('.eleven-pic2').addClass('opa');
	  $('.eleven-font').addClass('opa');
	  }
	  function back_eleven (){
	  $('.eleven-pic1').removeClass('opa-blur');
	  $('.eleven-pic2').removeClass('opa');
	  $('.eleven-font').removeClass('opa');
	  }
	  function page_twelve () {
		  
		  setTimeout(function (){
		   back_eleven();
		   back_last();
		   
	   },1000)
		   $('.twelve-font').addClass('opa-blur1')
		  
	  }
	  function back_twelve () {
		    $('.twelve-font').removeClass('opa-blur1')
		  
	  }
	  function page_last () {
		  
            setTimeout(function (){
		   back_twelve();
		   back_one();
		   
	   },1000)
		  $('.last-pic1,.last-pic2').addClass('opa1');
	       $('.pt-page-13 p').addClass('opa1');
		   $('.know').addClass('opa1');
		   $('.fen').show().addClass('opa1')
	  }
	  function back_last () {
		  $('.last-pic1,.last-pic2').removeClass('opa1');
	       $('.pt-page-13 p').removeClass('opa1');
		   $('.know').removeClass('opa1');
		   $('.fen').hide().removeClass('opa1')
	  }
	function nextPage( animation ) {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		
		var $currPage = $pages.eq( current );
		if (nexts){

		if( current < pagesCount - 1 ) {
			++current;
		}
		else {
			current = 0;
		}
	}else{

		if( current >0 ) {
			--current;
		}
		else {
			current = pagesCount - 1 ;
		}
	}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = '', inClass = '';

		switch( animation ) {

			case 1:
				outClass = 'pt-page-moveToLeft';
				inClass = 'pt-page-moveFromRight';
				break;
			case 2:
				outClass = 'pt-page-moveToRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 3:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 4:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case 5:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				break;
			case 6:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				break;
			case 7:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				break;
			case 8:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				break;
			case 9:
				outClass = 'pt-page-moveToLeftFade';
				inClass = 'pt-page-moveFromRightFade';
				break;
			case 10:
				outClass = 'pt-page-moveToRightFade';
				inClass = 'pt-page-moveFromLeftFade';
				break;
			case 11:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-moveFromBottomFade';
				break;
			case 12:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-moveFromTopFade';
				break;
			case 13:
				outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
				inClass = 'pt-page-moveFromRight';
				break;
			case 14:
				outClass = 'pt-page-moveToRightEasing pt-page-ontop';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 15:
				outClass = 'pt-page-moveToTopEasing pt-page-ontop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 16:
				outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
				inClass = 'pt-page-moveFromTop';
				break;
			case 17:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				break;
			case 18:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				break;
			case 19:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				break;
			case 20:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				break;
			case 21:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-scaleUpDown pt-page-delay300';
				break;
			case 22:
				outClass = 'pt-page-scaleDownUp';
				inClass = 'pt-page-scaleUp pt-page-delay300';
				break;
			case 23:
				outClass = 'pt-page-moveToLeft pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 24:
				outClass = 'pt-page-moveToRight pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 25:
				outClass = 'pt-page-moveToTop pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 26:
				outClass = 'pt-page-moveToBottom pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 27:
				outClass = 'pt-page-scaleDownCenter';
				inClass = 'pt-page-scaleUpCenter pt-page-delay400';
				break;
			case 28:
				outClass = 'pt-page-rotateRightSideFirst';
				inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
				break;
			case 29:
				outClass = 'pt-page-rotateLeftSideFirst';
				inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
				break;
			case 30:
				outClass = 'pt-page-rotateTopSideFirst';
				inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
				break;
			case 31:
				outClass = 'pt-page-rotateBottomSideFirst';
				inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
				break;
			case 32:
				outClass = 'pt-page-flipOutRight';
				inClass = 'pt-page-flipInLeft pt-page-delay500';
				break;
			case 33:
				outClass = 'pt-page-flipOutLeft';
				inClass = 'pt-page-flipInRight pt-page-delay500';
				break;
			case 34:
				outClass = 'pt-page-flipOutTop';
				inClass = 'pt-page-flipInBottom pt-page-delay500';
				break;
			case 35:
				outClass = 'pt-page-flipOutBottom';
				inClass = 'pt-page-flipInTop pt-page-delay500';
				break;
			case 36:
				outClass = 'pt-page-rotateFall pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				break;
			case 37:
				outClass = 'pt-page-rotateOutNewspaper';
				inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
				break;
			case 38:
				outClass = 'pt-page-rotatePushLeft';
				inClass = 'pt-page-moveFromRight';
				break;
			case 39:
				outClass = 'pt-page-rotatePushRight';
				inClass = 'pt-page-moveFromLeft';
				break;
			case 40:
				outClass = 'pt-page-rotatePushTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case 41:
				outClass = 'pt-page-rotatePushBottom';
				inClass = 'pt-page-moveFromTop';
				break;
			case 42:
				outClass = 'pt-page-rotatePushLeft';
				inClass = 'pt-page-rotatePullRight pt-page-delay180';
				break;
			case 43:
				outClass = 'pt-page-rotatePushRight';
				inClass = 'pt-page-rotatePullLeft pt-page-delay180';
				break;
			case 44:
				outClass = 'pt-page-rotatePushTop';
				inClass = 'pt-page-rotatePullBottom pt-page-delay180';
				break;
			case 45:
				outClass = 'pt-page-rotatePushBottom';
				inClass = 'pt-page-rotatePullTop pt-page-delay180';
				break;
			case 46:
				outClass = 'pt-page-rotateFoldLeft';
				inClass = 'pt-page-moveFromRightFade';
				break;
			case 47:
				outClass = 'pt-page-rotateFoldRight';
				inClass = 'pt-page-moveFromLeftFade';
				break;
			case 48:
				outClass = 'pt-page-rotateFoldTop';
				inClass = 'pt-page-moveFromBottomFade';
				break;
			case 49:
				outClass = 'pt-page-rotateFoldBottom';
				inClass = 'pt-page-moveFromTopFade';
				break;
			case 50:
				outClass = 'pt-page-moveToRightFade';
				inClass = 'pt-page-rotateUnfoldLeft';
				break;
			case 51:
				outClass = 'pt-page-moveToLeftFade';
				inClass = 'pt-page-rotateUnfoldRight';
				break;
			case 52:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-rotateUnfoldTop';
				break;
			case 53:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-rotateUnfoldBottom';
				break;
			case 54:
				outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomLeftIn';
				break;
			case 55:
				outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomRightIn';
				break;
			case 56:
				outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomTopIn';
				break;
			case 57:
				outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateRoomBottomIn';
				break;
			case 58:
				outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeLeftIn';
				break;
			case 59:
				outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeRightIn';
				break;
			case 60:
				outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeTopIn';
				break;
			case 61:
				outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateCubeBottomIn';
				break;
			case 62:
				outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselLeftIn';
				break;
			case 63:
				outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselRightIn';
				break;
			case 64:
				outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselTopIn';
				break;
			case 65:
				outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
				inClass = 'pt-page-rotateCarouselBottomIn';
				break;
			case 66:
				outClass = 'pt-page-rotateSidesOut';
				inClass = 'pt-page-rotateSidesIn pt-page-delay200';
				break;
			case 67:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;

		}

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
	}

	init();

	return { init : init };
    


	

})();
     