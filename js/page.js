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
//        ְҵ�л�
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

//        ��2���Banner
        nie.util.abc.load({promark: "lis9z", callBack: function () {
            var g = $("#switch-2").find("a"), f = $("#switchnav-1");
            g.each(function (j) {
                var h = j + 1;
                f.append("<a>" + h + "</a>")
            });
            $.Switch({btnDoms: [f.children("a")], imgDoms: [g]});
        }, type: "js"});
//        ����3���Banner
        nie.util.abc.load({promark: "zrpnw", callBack: function () {
            var g = $("#banner-switch").find("a"), f = $("#switchnav-2").find("nav");
            g.each(function () {
                $(this).addClass('SwitchPicShow');
                f.append("<a class='SwitchPicNavBtn sprite sprite-switchnav'></a>")
            });
            $.Switch({btnDoms: [f.children("a")], imgDoms: [g]})
        }, type: "js"})
//        ����ģ��
        if($("#marquee li").length > 3){
            $.marquee2("#marquee","top");
        }
       $.marquee2("#marquee2","left");
//        ��̬�����������
        var share3=nie.util.share({
		fat:".bshare",
		type:2,
		title:"#�й�ԭ���羺�������Ͽɣ�WHYNOT��#�����й���ң���ҪΪ�й�ԭ���羺�������й�ԭ������������Ӣ��������������ƽ�����4V5�����һ��ӻ����й�ԭ����Ҫ������ȷ�Դ�������֮�������ԭ��������һ��Ϊ�й�ԭ���羺���ͣ�",
        content:"#�й�ԭ���羺�������Ͽɣ�WHYNOT��#�����й���ң���ҪΪ�й�ԭ���羺�������й�ԭ������������Ӣ��������������ƽ�����4V5�����һ��ӻ����й�ԭ����Ҫ������ȷ�Դ�������֮�������ԭ��������һ��Ϊ�й�ԭ���羺���ͣ�",
        defShow: [5, 2, 3, 1],
        img: ""
    });
        var content="#�й�ԭ���羺�������Ͽɣ�WHYNOT��#�����й���ң���ҪΪ�й�ԭ���羺�������й�ԭ������������Ӣ��������������ƽ�����4V5�����һ��ӻ����й�ԭ����Ҫ������ȷ�Դ�������֮�������ԭ��������һ��Ϊ�й�ԭ���羺���ͣ�",choice=false;
        $(".demon").click(function(){
            if(choice==false){
                $("textarea").val("#�й�ԭ���羺�������Ͽɣ�WHYNOT��#�����й���ң���ҪΪ�й�ԭ���羺�������й�ԭ������������Ӣ��������������ƽ�����4V5�����һ��ӻ����й�ԭ����Ҫ������ȷ�Դ�������֮�������ԭ��������һ��Ϊ�й�ԭ���羺���ͣ�");
                $(this).addClass("check");
                choice=true;
            }else{
                $(this).removeClass("check");
                choice=false;
            }
        })
        $("textarea").focus(function(){
            if($("textarea").val()=="���ڴ�������������") $("textarea").val("");
            choice=false;
        }).blur(function(){
                if($(this).val()!=content && $(this).val()!=""){
                    share3.args.title="#�й�ԭ���羺�������Ͽɣ�WHYNOT��#"+$(this).val();
                    share3.args.content="#�й�ԭ���羺�������Ͽɣ�WHYNOT��#"+$(this).val();
                    $(".demon").removeClass("check");
                    choice=false;
                }else{
                    $(".demon").addClass("check");
                    choice=true;
                }
            });
    });



//    �ص�����
    $(window).scroll(function () {
        var scrollValue=$(window).scrollTop(),top=$("#gotop")
        scrollValue > 500 ? top.stop().animate({top:scrollValue+300,opacity:'1'}):top.stop().animate({top:'500px',opacity:'0'});
    });
    $("#gotop").click(function () {
        $("html,body").animate({scrollTop:0},200);
    })
//    �������
    $('.fSearch').find('.inpBut').click(function(){
        var val = $("#searchKeyWords1").val();
        window.open(encodeURI("http://so.xy2.163.com/search?qs="+val));
    })
//    ְҵ�л�
    $('.gifs').click(function(){
        var imgurl = $(this).attr('data-src');
        $(this).attr('src',imgurl);
    })
})
function scrollPics_tab(opt){
    //ֻ���һ��tab con
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

//����
//--��������ǽ����ֻ����������һ��ģ����Դ����Ƚϳ�һЩ�����Ը��������Լ������������Ӧ�ĵ������
function openD(opt){
    //ֻ���һ��tab con
    var settings = {
            id: '',
            type : '',//1Ϊ��ͨ���㣬2Ϊflash���㣬3Ϊ��Ƶ����
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
// �ɰ浯��
    popbg.css({"height":dh}).show();
// ���㵯��
    function posPop(idname){
        idname.height()>wh?idname.fadeIn().css({'top':st,'left':(ww-idname.width())/2+sl}):idname.fadeIn().css({'top':(wh-idname.height())/2+st,'left':(ww-idname.width())/2+sl});
    }
//  ����ر�
$('.aCloseQ').click(function(){
    $(this).parent().fadeOut();
    $("#NIE-overlayer").hide();
});
//�жϵ������
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
            $('.aCloseQ').hide();//flash���������رհ�ť
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