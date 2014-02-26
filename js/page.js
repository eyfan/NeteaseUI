$(function(){
//    scroll
    scrollPics_tab({
        currentTarget:'#slideShow',
        wrap: '#slideWrap',
        tab: '#slideShow ol a'
    });
    nie.use(["ui.tab", 'ui.Switch',"ui.marquee2","util.share"], function () {
//        tab
        $.tab(".fTabNav li", ".fTabCont .ftxtList");
//        职业切换
        $.tab(".pnav li",".ptabs > div");
        $.tab(".gnav1 a",".gtabs1 > div");
        $.tab(".gnav2 a",".gtabs2 > div");
        $.tab(".gnav3 a",".gtabs3 > div");
        $.tab(".gnav4 a",".gtabs4 > div");
//        switch
        for (var i = 0; i < $(".fSwitchPic a").length; i++) {
            nums = i + 1;
            $(".fSwitchNav").append("<a>" + nums + "</a>")
        }
        $.Switch(".fSwitchNav a", ".fSwitchPic a");

//        大话2广告Banner
        nie.util.abc.load({promark: "lis9z", callBack: function () {
            var g = $("#switch-2").find("a"), f = $("#switchnav-1");
            g.each(function (j) {
                var h = j + 1;
                f.append("<a>" + h + "</a>")
            });
            $.Switch({btnDoms: [f.children("a")], imgDoms: [g]});
        }, type: "js"});
//        天下3广告Banner
        nie.util.abc.load({promark: "zrpnw", callBack: function () {
            var g = $("#banner-switch").find("a"), f = $("#switchnav-2").find("nav");
            g.each(function () {
                $(this).addClass('SwitchPicShow');
                f.append("<a class='SwitchPicNavBtn sprite sprite-switchnav'></a>")
            });
            $.Switch({btnDoms: [f.children("a")], imgDoms: [g]})
        }, type: "js"})
//        滚动模块
        if($("#marquee li").length > 3){
            $.marquee2("#marquee","top");
        }
       $.marquee2("#marquee2","left");
//        动态输出分享内容
        var share3=nie.util.share({
		fat:".bshare",
		type:2,
		title:"#中国原创电竞被世界认可，WHYNOT！#我是中国玩家，我要为中国原创电竞正名！中国原创竞技大作《英雄三国》，更公平，告别4V5，告别挂机坑货。中国原创需要你我正确对待，星星之火可以燎原，让我们一起为中国原创电竞加油！",
        content:"#中国原创电竞被世界认可，WHYNOT！#我是中国玩家，我要为中国原创电竞正名！中国原创竞技大作《英雄三国》，更公平，告别4V5，告别挂机坑货。中国原创需要你我正确对待，星星之火可以燎原，让我们一起为中国原创电竞加油！",
        defShow: [5, 2, 3, 1],
        img: ""
    });
        var content="#中国原创电竞被世界认可，WHYNOT！#我是中国玩家，我要为中国原创电竞正名！中国原创竞技大作《英雄三国》，更公平，告别4V5，告别挂机坑货。中国原创需要你我正确对待，星星之火可以燎原，让我们一起为中国原创电竞加油！",choice=false;
        $(".demon").click(function(){
            if(choice==false){
                $("textarea").val("#中国原创电竞被世界认可，WHYNOT！#我是中国玩家，我要为中国原创电竞正名！中国原创竞技大作《英雄三国》，更公平，告别4V5，告别挂机坑货。中国原创需要你我正确对待，星星之火可以燎原，让我们一起为中国原创电竞加油！");
                $(this).addClass("check");
                choice=true;
            }else{
                $(this).removeClass("check");
                choice=false;
            }
        })
        $("textarea").focus(function(){
            if($("textarea").val()=="请在此输入您的宣言") $("textarea").val("");
            choice=false;
        }).blur(function(){
                if($(this).val()!=content && $(this).val()!=""){
                    share3.args.title="#中国原创电竞被世界认可，WHYNOT！#"+$(this).val();
                    share3.args.content="#中国原创电竞被世界认可，WHYNOT！#"+$(this).val();
                    $(".demon").removeClass("check");
                    choice=false;
                }else{
                    $(".demon").addClass("check");
                    choice=true;
                }
            });
    });



//    回到顶部
    $(window).scroll(function () {
        var scrollValue=$(window).scrollTop(),top=$("#gotop")
        scrollValue > 500 ? top.stop().animate({top:scrollValue+300,opacity:'1'}):top.stop().animate({top:'500px',opacity:'0'});
    });
    $("#gotop").click(function () {
        $("html,body").animate({scrollTop:0},200);
    })
//    搜索版块
    $('.fSearch').find('.inpBut').click(function(){
        var val = $("#searchKeyWords1").val();
        window.open(encodeURI("http://so.xy2.163.com/search?qs="+val));
    })
//    职业切换
    $('.gifs').click(function(){
        var imgurl = $(this).attr('data-src');
        $(this).attr('src',imgurl);
    })
})
function scrollPics_tab(opt){
    //只针对一个tab con
    var settings = {
            currentTarget: '',
            autoplay : true,
            minNum: 1,
            time: 5000,
            tab: ''
        },
        opt = opt || {};
    settings = $.extend(settings, opt);

    var $currentTarget = $(settings.currentTarget),
        $wrap = $(settings.wrap),
        ul = $wrap.find("ul"),
        li_len = ul.find("li").length,
        li_w = ul.find("li").width(),
        left = $currentTarget.find("#prev"),
        right = $currentTarget.find("#next"),
        tab = $(settings.tab),
        timer = null,
        currentIndex = 0;
    tab.eq(currentIndex).addClass('current');

    if(li_len > settings.minNum){
        right.click(function() {
            currentIndex++;
            if(currentIndex == li_len){
                currentIndex = 0;
            }
            tab.removeClass('current').eq(currentIndex).addClass('current');

            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, 150)
        });
        left.click(function() {
            currentIndex--;
            if(currentIndex < 0){
                currentIndex = li_len - 1;
            }
            tab.removeClass('current').eq(currentIndex).addClass('current');

            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, 300)
        });
        tab.click(function(){
            currentIndex = $(this).index(settings.tab);
            tab.removeClass('current').eq(currentIndex).addClass('current');
            ul.stop().animate({
                "left": -(li_w*currentIndex)
            }, 300)
        });
        if (settings.autoplay) {
            timer = setInterval(function() {
                right.trigger("click");
            }, settings.time);
            $wrap.mouseenter(function() {
                clearInterval(timer);
            })
            $wrap.mouseleave(function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    right.trigger("click");
                }, settings.time);
            })
        };
    }
}

//弹层
//--这个函数是将三种基本弹层合在一体的，所以代码会比较长一些，可以根据需求自己独立出来相对应的弹层代码
function openD(opt){
    //只针对一个tab con
    var settings = {
            id: '',
            type : '',//1为普通弹层，2为flash弹层，3为视频弹层
            width: '',
            height: '',
            flashurl:'',
            videourl:'',
            wmode: ''
        },
        opt = opt || {};
    settings = $.extend(settings, opt);

    var popbg = $("#NIE-overlayer"),
        popid = $(settings.id),
        type = settings.type,
        w =parseInt(settings.width),
        h = parseInt(settings.height),
        furl = settings.flashurl,
        vurl = settings.videourl,
        wmode = settings.wmode,
        dh = $(document).height(),
        wh = $(window).height(),
        ww = $(window).width(),
        st = $(window).scrollTop(),
        sl = $(window).scrollLeft();
// 蒙版弹出
    popbg.css({"height":dh}).show();
// 弹层弹出
    function posPop(idname){
        idname.height()>wh?idname.fadeIn().css({'top':st,'left':(ww-idname.width())/2+sl}):idname.fadeIn().css({'top':(wh-idname.height())/2+st,'left':(ww-idname.width())/2+sl});
    }
//  弹层关闭
$('.aCloseQ').click(function(){
    $(this).parent().fadeOut();
    $("#NIE-overlayer").hide();
});
//判断弹层类别
    switch (type){
        case '1':
            popid.css({'height':h+'px','width':w+'px'});
            posPop(popid);
            break;
        case '2':
            $('#flash-wrap').html('');
            nie.use(["util.swfobject"], function () {
                $('#flash-wrap').flash({
                    swf:furl,
                    width:w,
                    height:h,
                    allowScriptAccess:'always',
                    wmode:wmode
                });
            })
            var obj = $('#flashtc1');
            obj.css({'width':w,'height':h});
            $('.aCloseQ').hide();//flash本身有做关闭按钮
            posPop(popid);

            break;
        case '3':
            $('#dVideo').html('').css({'height':h+'px','width':w+'px'});
            popid.css({'height':h+22+'px','width':w+22+'px'});
            posPop(popid);
            nie.use(['nie.util.video'], function () {
                nie.util.video($('#dVideo'),{
                    movieUrl:vurl,
                    mp4_movieUrl:vurl.replace(/\.(flv|f4v)/,'.mp4'),
                    width:w,
                    height:h,
                    bufferTime:5,
                    loopTimes:0,
                    wmode:"opaque",
                    volume:0.8,
                    autoPlay:true
                });
            })
            break;
        default :break;
    }

}