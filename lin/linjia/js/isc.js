function isc(_str) {
    var myScroll;
    function loaded() {
        myScroll = new iScroll(_str,{
            fadeScrollbar: false,
            checkDOMChanges: true,
            scrollbarClass: "myScrollbar",
            onBeforeScrollStart: null,
            useTransition: true
        });
        myScroll.refresh()
    }
    document.addEventListener('touchmove', function(e) {
        e.preventDefault()
    }, {
        passive: false
    });
    window.addEventListener("DOMContentLoaded", loaded, false)
}
;function reisc(_str, _o, _p, _fc, _more) {
    var dataResult;
    var myScroll, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset, generatedCount = 0;
    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        pullUpEl = document.getElementById('pullUp');
        pullUpOffset = pullUpEl.offsetHeight;
        myScroll = new iScroll(_str,{
            fadeScrollbar: false,
            checkDOMChanges: true,
            scrollbarClass: "myScrollbar",
            onBeforeScrollStart: null,
            useTransition: true,
            topOffset: pullDownOffset,
            onRefresh: function() {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新'
                } else if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多'
                }
            },
            onScrollMove: function() {
                $("#pullUp").removeClass("hid");
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
                    this.minScrollY = 0
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                    this.minScrollY = -pullDownOffset
                } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放刷新';
                    this.maxScrollY = this.maxScrollY
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                    this.maxScrollY = pullUpOffset
                }
            },
            onScrollEnd: function() {
                if (pullDownEl.className.match('flip')) {
                    $("#pullDown").addClass("hid");
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
                    pullDownAction();
                } else if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
                    pullUpAction();
                }
            }
        });
        loadAction();
        myScroll.refresh()
    }
    document.addEventListener('touchmove', function(e) {
        e.preventDefault()
    }, {
        passive: false
    });
    window.addEventListener("DOMContentLoaded", loaded, false);
    function loadAction() {
        _fc(_o, 12, false)
    }
    function pullDownAction() {
        if (_more) {
            _fc(_o, 12, _more)
        }
        $("#pullDown").removeClass("hid");
        myScroll.refresh();
        $("#pullDown").addClass("hid")
    }
    function pullUpAction() {
        _o += 1;
        _fc(_o, _p, false);
        $("#pullUp").removeClass("hid");
        myScroll.refresh();
        $("#pullUp").addClass("hid")
    }
}
;