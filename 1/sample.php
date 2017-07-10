<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxe0f46d0ac333f80a", "0c80626ee231fb62d297167721b62db6");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>董小秘</title>
    <meta name="description" content="A Collection of Page Transitions with CSS Animations" />
    <meta name="keywords" content="page transition, css animation, website, effect, css3, jquery" />
    <meta name="author" content="Codrops" />
    <link rel="shortcut icon" href="../favicon.ico"> 
    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <link rel="stylesheet" type="text/css" href="css/multilevelmenu.css" />
    <link rel="stylesheet" type="text/css" href="css/component.css" />
    <link rel="stylesheet" type="text/css" href="css/animations.css" />
    <script>
          //修改效果
              var aaa=21;
              /*if (/android/i.test(navigator.userAgent)){
    aaa=32;
}*/
    </script>
    <script src="js/modernizr.custom.js"></script>
    
    <script src="js/jquery-1.11.1.min.js"></script> 
  </head>
  <body>  
    <div id='loading'>
    <div id='loadingc'>
       <div id='loadingi'>
       </div>
       <div id='loadingf'>
         <span>loading</span>
         <div id='shadow'></div>
       </div>
      
    </div>
    
  </div>
      
        <div id='yin'>
      <img src="img/yin.png" alt="">
     </div>
    <div style='display:none'>
      <audio src="home.mp3" controls="controls"  loop="loop" autoplay="autoplay" hidden='true' style="position:absolute" id='myaudio'>您的浏览器不支持audio</audio>
    </div>

    <div class="pt-triggers" style='display:none'>
      <button id="iterateEffects" class="pt-touch-button">显示下一页切换</button>
      <div id="dl-menu" class="dl-menuwrapper">
        <button class="dl-trigger">选择切换效果</button>
        <ul class="dl-menu">
          <li>
            <a href="#">Move</a>
            <ul class="dl-submenu">
              <li data-animation="1"><a href="#">Move to left/ from right</a></li>
              <li data-animation="2"><a href="#">Move to right/ from left</a></li>
              <li data-animation="3"><a href="#">Move to top/ from bottom</a></li>
              <li data-animation="4"><a href="#">Move to bottom/ from top</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Fade</a>
            <ul class="dl-submenu">
              <li data-animation="5"><a href="#">Fade / from right</a></li>
              <li data-animation="6"><a href="#">Fade / from left</a></li>
              <li data-animation="7"><a href="#">Fayde / from bottom</a></li>
              <li data-animation="8"><a href="#">Fade / from top</a></li>
              <li data-animation="9"><a href="#">Fade left / Fade right</a></li>
              <li data-animation="10"><a href="#">Fade right / Fade left</a></li>
              <li data-animation="11"><a href="#">Fade top / Fade bottom</a></li>
              <li data-animation="12"><a href="#">Fade bottom / Fade top</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Different easing</a>
            <ul class="dl-submenu">
              <li data-animation="13"><a href="#">Different easing / from right</a></li>
              <li data-animation="14"><a href="#">Different easing / from left</a></li>
              <li data-animation="15"><a href="#">Different easing / from bottom</a></li>
              <li data-animation="16"><a href="#">Different easing / from top</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Scale</a>
            <ul class="dl-submenu">
              <li data-animation="17"><a href="#">Scale down / from right</a></li>
              <li data-animation="18"><a href="#">Scale down / from left</a></li>
              <li data-animation="19"><a href="#">Scale down / from bottom</a></li>
              <li data-animation="20"><a href="#">Scale down / from top</a></li>
              <li data-animation="21"><a href="#">Scale down / scale down</a></li>
              <li data-animation="22"><a href="#">Scale up / scale up</a></li>
              <li data-animation="23"><a href="#">Move to left / scale up</a></li>
              <li data-animation="24"><a href="#">Move to right / scale up</a></li>
              <li data-animation="25"><a href="#">Move to top / scale up</a></li>
              <li data-animation="26"><a href="#">Move to bottom / scale up</a></li>
              <li data-animation="27"><a href="#">Scale down / scale up</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Rotate</a>
            <ul class="dl-submenu">
              <li>
                <a href="#">Glue</a>
                <ul class="dl-submenu">
                  <li data-animation="28"><a href="#">Glue left / from right</a></li>
                  <li data-animation="29"><a href="#">Glue right / from left</a></li>
                  <li data-animation="30"><a href="#">Glue bottom / from top</a></li>
                  <li data-animation="31"><a href="#">Glue top / from bottom</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Flip</a>
                <ul class="dl-submenu">
                  <li data-animation="32"><a href="#">Flip right</a></li>
                  <li data-animation="33"><a href="#">Flip left</a></li>
                  <li data-animation="34"><a href="#">Flip top</a></li>
                  <li data-animation="35"><a href="#">Flip bottom</a></li>
                </ul>
              </li>
              <li data-animation="36"><a href="#">Fall</a></li>
              <li data-animation="37"><a href="#">Newspaper</a></li>
              <li>
                <a href="#">Push / Pull</a>
                <ul class="dl-submenu">
                  <li data-animation="38"><a href="#">Push left / from right</a></li>
                  <li data-animation="39"><a href="#">Push right / from left</a></li>
                  <li data-animation="40"><a href="#">Push top / from bottom</a></li>
                  <li data-animation="41"><a href="#">Push bottom / from top</a></li>

                  <li data-animation="42"><a href="#">Push left / pull right</a></li>
                  <li data-animation="43"><a href="#">Push right / pull left</a></li>
                  <li data-animation="44"><a href="#">Push top / pull bottom</a></li>
                  <li data-animation="45"><a href="#">Push bottom / pull top</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Fold / Unfold</a>
                <ul class="dl-submenu">
                  <li data-animation="46"><a href="#">Fold left / from right</a></li>
                  <li data-animation="47"><a href="#">Fold right / from left</a></li>
                  <li data-animation="48"><a href="#">Fold top / from bottom</a></li>
                  <li data-animation="49"><a href="#">Fold bottom / from top</a></li>
                  <li data-animation="50"><a href="#">Move to right / unfold left</a></li>
                  <li data-animation="51"><a href="#">Move to left / unfold right</a></li>
                  <li data-animation="52"><a href="#">Move to bottom / unfold top</a></li>
                  <li data-animation="53"><a href="#">Move to top / unfold bottom</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Room</a>
                <ul class="dl-submenu">
                  <li data-animation="54"><a href="#">Room to left</a></li>
                  <li data-animation="55"><a href="#">Room to right</a></li>
                  <li data-animation="56"><a href="#">Room to top</a></li>
                  <li data-animation="57"><a href="#">Room to bottom</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Cube</a>
                <ul class="dl-submenu">
                  <li data-animation="58"><a href="#">Cube to left</a></li>
                  <li data-animation="59"><a href="#">Cube to right</a></li>
                  <li data-animation="60"><a href="#">Cube to top</a></li>
                  <li data-animation="61"><a href="#">Cube to bottom</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Carousel</a>
                <ul class="dl-submenu">
                  <li data-animation="62"><a href="#">Carousel to left</a></li>
                  <li data-animation="63"><a href="#">Carousel to right</a></li>
                  <li data-animation="64"><a href="#">Carousel to top</a></li>
                  <li data-animation="65"><a href="#">Carousel to bottom</a></li>
                </ul>
              </li>
              <li data-animation="66"><a href="#">Sides</a></li>
            </ul>
          </li>
          <li data-animation="67"><a href="#">Slide</a></li>
        </ul>
        <div class="footer-banner" style="position:absolute;bottom:-350px;left:-200px;width:728px; margin:30px auto"></div>
      </div><!-- /dl-menu-wrapper-->
    </div><!-- /triggers -->

    <div id="pt-main" class="pt-perspective">
      <div class="pt-page pt-page-1">
            <img src="img/one-font1.png" alt="" class="one-font1 one-font">
            <img src="img/one-font2.png" alt="" class="one-font2 one-font">
          <div class="one-div">
              <img src="img/one2.jpg" alt="" class="one-pic one-pic1">
              <img src="img/one1.jpg" alt="" class="one-pic one-pic2">
          </div>
          <img src="img/scroll.png" alt="" class="scroll">
          <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-2">
          <img src="img/two1.jpg" alt="" class="two-top two-top1">
          <img src="img/two2.png" alt="" class="two-top two-top2">
          <img src="img/two3.jpg" alt="" class="two-bottom two-bottom1">
           <img src="img/two4.png" alt="" class="two-bottom two-bottom2">
           <div class="two-div">
            <img src="img/two-font1.png" alt="" class="two-font two-font1">
            <img src="img/two-font2.png" alt="" class="two-font two-font2">
            <img src="img/two-font3.png" alt="" class="two-font two-font3">
            <img src="img/two-font4.png" alt="" class="two-font two-font4">
           </div>
                  <img src="img/scroll.png" alt="" class="scroll">
                  <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-3">
          <img src="img/three-font1.png" alt="" class="three-font three-font1">
          <img src="img/three-font2.png" alt="" class="three-font three-font2">
          <img src="img/three-font3.png" alt="" class="three-font three-font3">
          <div class="three-div">
            <img src="img/three1.jpg" alt="" class="three-pic three-pic1">
            <img src="img/three2.png" alt="" class="three-pic three-pic2">
          </div>
                  <img src="img/scroll.png" alt="" class="scroll">
                  <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-4">
         <img src="img/four-font1.jpg" alt="" class="four-font four-font1">
          <img src="img/four-font2.jpg" alt="" class="four-font four-font2">
          <div class="four-div">
            <img src="img/four1.jpg" alt="" class="four-pic four-pic1">
            <img src="img/four2.png" alt="" class="four-pic four-pic2">
          </div>
          <img src="img/scroll.png" alt="" class="scroll">
                <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-5">
          <div class="five-div">
            <img src="img/five1.jpg" alt="" class="five-top five-top1">
            <img src="img/five2.png" alt="" class="five-top five-top2">
          </div>
              <img src="img/five-font1.png" alt="" class="five-font five-font1">
               <img src="img/five-font2.png" alt="" class="five-font five-font2">
          <div class="five-div">
            <img src="img/five3.jpg" alt="" class="five-bottom five-bottom1">
            <img src="img/five4.png" alt="" class="five-bottom five-bottom2">
          </div>
          <img src="img/scroll.png" alt="" class="scroll">
          <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-6">
           <img src="img/six-font1.png" alt="" class="six-font six-font1">
           <img src="img/six-font2.png" alt="" class="six-font six-font2">
           <img src="img/six-font3.png" alt="" class="six-font six-font3">
           <div class="six-div">
            <img src="img/six1.jpg" alt="" class="six-top six-top1">
            <img src="img/six2.png" alt="" class="six-top six-top2">
            <img src="img/six2-1.png" alt="" class="six-top six-top2-1">
           </div>
            <div class="six-div">
            <img src="img/six3.jpg" alt="" class="six-top six-bottom1">
            <img src="img/six4.png" alt="" class="six-top six-bottom2">
            <img src="img/six4-1.png" alt="" class="six-top six-bottom2-1">
           </div>
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-7">
           <img src="img/seven-font1.png" alt="" class="seven-font seven-font1">
           <img src="img/seven-font2.png" alt="" class="seven-font seven-font2">
           <div class="seven-div">
            <img src="img/six1.jpg" alt="" class="seven-top seven-top1">
            <img src="img/seven1.png" alt="" class="seven-top seven-top2">
            <img src="img/seven1-1.png" alt="" class="seven-top seven-top2-1">
           </div>
           <div class="seven-div">
            <img src="img/six3.jpg" alt="" class="seven-top seven-bottom1">
            <img src="img/seven2.png" alt="" class="seven-top seven-bottom2">
             <img src="img/seven2-1.png" alt="" class="seven-top seven-bottom2-1">
           </div>
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-8">
           <img src="img/eight-font1.png" alt="" class="eight-font eight-font1">
           <img src="img/eight-font2.png" alt="" class="eight-font eight-font2">
           <div class="eight-div">
            <img src="img/eight1.jpg" alt="" class="eight-pic eight-pic1">
            <img src="img/eight2.png" alt="" class="eight-pic eight-pic2">
           </div>
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-9">
           <img src="img/night-font1.png" alt="" class="night-font night-font1">
           <img src="img/night-font2.png" alt="" class="night-font night-font2">
           <div class="night-div">
            <img src="img/night1.jpg" alt="" class="night-pic night-pic1">
            <img src="img/night2.png" alt="" class="night-pic night-pic2">
            <img src="img/night2-1.png" alt="" class="night-pic night-pic2-1">
            <img src="img/night2-2.png" alt="" class="night-pic night-pic2-2">
            <img src="img/night2-3.png" alt="" class="night-pic night-pic2-3">
           </div>
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-10">
           <img src="img/ten-font1.png" alt="" class="ten-font ten-font1">
           <img src="img/ten-font2.jpg" alt="" class="ten-font ten-font2">
           <div class="ten-div">
            <img src="img/ten1.jpg" alt="" class="ten-pic ten-pic1">
            <img src="img/ten2.png" alt="" class="ten-pic ten-pic2">
           </div>
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-11">
          <img src="img/eleven-font1.png" alt="" class="eleven-font eleven-font1">
          <img src="img/eleven-font2.png" alt="" class="eleven-font eleven-font2">
          <img src="img/eleven-font3.png" alt="" class="eleven-font eleven-font3">
          <img src="img/eleven-font4.png" alt="" class="eleven-font eleven-font4">
          <img src="img/eleven-font5.png" alt="" class="eleven-font eleven-font5">
          <img src="img/eleven-font6.png" alt="" class="eleven-font eleven-font6">
          <img src="img/eleven-font7.jpg" alt="" class="eleven-font eleven-font7">
          <div class="eleven-div">
            <img src="img/eleven1.jpg" alt="" class="eleven-pic eleven-pic1">
            <img src="img/eleven2.png" alt="" class="eleven-pic eleven-pic2">
          </div>
          <img src="img/scroll.png" alt="" class="scroll">
          <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-12">
         <div class="twelve-div">
            <img src="img/twelve-font1.png" alt="" class="twelve-font twelve-font1">
            <img src="img/twelve-font1.1.png" alt="" class="twelve-font twelve-font1-1">
            <img src="img/twelve-font1.1.png" alt="" class="twelve-font twelve-font1-2">
            <img src="img/twelve-font1.1.png" alt="" class="twelve-font twelve-font1-3">
          </div>
           <img src="img/twelve-font2.jpg" alt="" class="twelve-font twelve-font2">
           <img src="img/scroll.png" alt="" class="scroll">
           <div class="no-touch"></div>
      </div>
      <div class="pt-page pt-page-13">
          <img src="img/last1.jpg" alt="" class="last-pic last-pic1">
          <img src="img/last2.jpg" alt="" class="last-pic last-pic2">
          <p>
            长按二维码，保存到手机,<br>
            扫描二维码，关注董小秘 <br>
            公众账号：<span>dongxiaomi01</span>
          </p>
          <a href="" class="know"> 
            <img src="img/last3.jpg" alt="" class="last-pic last-pic3">
          </a>
          <p class="last-p">好东西记得分享给朋友哦</p> 
          <div class="fen">
           <div class="fen-kong"></div>
            <img src="img/fen.png" alt="">
          </div>
      </div>
    </div>
    
    <script src="js/jquery.dlmenu.js"></script>
    <script src="js/pagetransitions.js"></script>
    <style>
             .pt-page {
              background: #fff;
             }
    </style>
   
</body>
<!--
<script>
   //document.getElementBy('myaudio').play();

</script>-->
<script>
  $('#loading')[0].addEventListener('touchstart',function  (event) {
   event.preventDefault();
   return false;
},false);
  $('#loading')[0].addEventListener('touchmove',function  (event) {
   event.preventDefault();
   return false;
},false);
</script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
	    'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'

    ]
  });
  wx.ready(function () {
	  
	  //分享给朋友
	wx.onMenuShareAppMessage({
    title: '董小秘', // 分享标题
    desc: '董小秘带你回家', // 分享描述
    link: 'http://wx.jwcreat.cn/dongxiaomi/sample.php', // 分享链接
    imgUrl: 'http://wx.jwcreat.cn/dongxiaomi/img/last1.jpg', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: 'http://wx.jwcreat.cn/dongxiaomi/sample.php', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () { 
        // 用户确认分享后执行的回调函数
		 //alert('分享成功');
		//$('div').css({background:'orange'})

    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
		//alert('分享失败');
    }
});

	//分享到朋友圈
    wx.onMenuShareTimeline({
   title: '董小秘', // 分享标题
    desc: '董小秘带你回家', // 分享描述
    link: 'http://wx.jwcreat.cn/dongxiaomi/sample.php', // 分享链接
    imgUrl: 'http://wx.jwcreat.cn/dongxiaomi/img/last1.jpg', // 分享图标
    success: function () { 
        // 用户确认分享后执行的回调函数
    },
    cancel: function () { 
        // 用户取消分享后执行的回调函数
    }
});
    


  /*// 5 图片接口
  // 5.1 拍照、本地选图
  var images = {
    localId: [],
    serverId: []
  };
  document.querySelector('#chooseImage').onclick = function () {
    wx.chooseImage({
      success: function (res) {
        images.localId = res.localIds;
        alert('已选择 ' + res.localIds.length + ' 张图片');
      }
    });
  };

   5.2 图片预览
  document.querySelector('#previewImage').onclick = function () {
    wx.previewImage({
      current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
      urls: [
        'http://img3.douban.com/view/photo/photo/public/p2152117150.jpg',
        'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
        'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
      ]
    });
  };

  // 5.3 上传图片
  document.querySelector('#uploadImage').onclick = function () {
    if (images.localId.length == 0) {
      alert('请先使用 chooseImage 接口选择图片');
      return;
    }
    var i = 0, length = images.localId.length;
    images.serverId = [];
    function upload() {
      wx.uploadImage({
        localId: images.localId[i],
        success: function (res) {
          i++;
          alert('已上传：' + i + '/' + length);
          images.serverId.push(res.serverId);
          if (i < length) {
            upload();
          }
        },
        fail: function (res) {
          alert(JSON.stringify(res));
        }
      });
    }
    upload();
  };

  // 5.4 下载图片
  document.querySelector('#downloadImage').onclick = function () {
    if (images.serverId.length === 0) {
      alert('请先使用 uploadImage 上传图片');
      return;
    }
    var i = 0, length = images.serverId.length;
    images.localId = [];
    function download() {
      wx.downloadImage({
        serverId: images.serverId[i],
        success: function (res) {
          i++;
          alert('已下载：' + i + '/' + length);
          images.localId.push(res.localId);
          if (i < length) {
            download();
          }
        }
      });
    }
    download();
  };*/

  });
</script>

</html>
