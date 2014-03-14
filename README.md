NeteaseUI
=========

网易网站组官网相关UI制作
 <blockquote>为了方便今后的页面制作，特此做一个方便以后调用的UI库，来提高大家的工作效率</blockquote>


**相关UI组件**
--------------------

 1.新闻列表

 http://fangge.github.io/NeteaseUI/ftxtList.html

 2.图片列表

 http://fangge.github.io/NeteaseUI/fpicList.html

 3.新闻切换

 http://fangge.github.io/NeteaseUI/fTabNews.html

 4.Banner切换

 http://fangge.github.io/NeteaseUI/fBanner.html

 5.广告Banner切换

 http://fangge.github.io/NeteaseUI/fSmartBanner.html

 5.通用飘窗

 http://fangge.github.io/NeteaseUI/fgoTop.html

 6.弹层合集（普通弹层、flash弹层、视频弹层）

 http://fangge.github.io/NeteaseUI/fpop.html

 7.搜索版块

 http://fangge.github.io/NeteaseUI/fSearch.html

 8.滚动模块

 http://fangge.github.io/NeteaseUI/fMarquee.html

 9.职业模块

 http://fangge.github.io/NeteaseUI/fCareer.html

 10.顶条功能条

 http://fangge.github.io/NeteaseUI/fTopBar.html

 11.多层滑出菜单

 http://multi-level-push-menu.make.rs/demo/basichtml/basichtml.html

 12.动态输出分享信息

 http://fangge.github.io/NeteaseUI/fDyShare.html

 13.图片延迟加载
 参考地址：http://wh.163.com/index.html
 代码请参考：nie.util.pageLoad
 ```javascript
         nie.util.pageLoad=nie.util.pageLoad||function(e){$(function(){var g=$(window),f={},h={},i=window.location.hash,j=function(){var c=g.scrollTop()-50,a=c+g.height()+50,d;for(d in f){var b=f[d],e=!1;if(b.b){if(b.y>=c&&b.y<=a||b.b>=c&&b.b<=a)e=!0}else b.y>=c&&b.y<=a&&(e=!0);e&&b.dom.attr("src",b.src)}for(d in h)b=h[d],(b.top>=c&&b.top<=a||b.bot>=c&&b.bot<=a)&&b.dom.attr("style","background-image:url("+b.src+")")};e.bgSelector&&$(e.bgSelector).each(function(c){var a=$(this),d=a.attr("data-bgUrl");if(d!=
                 ""){var b=a.offset().top+parseInt($.browser.msie?a.css("background-position-y"):a.css("background-position").split(" ")[1]);h[c]={dom:a,src:d,top:b,bot:b+a.height()}}});e.imgSelector&&$(e.imgSelector).each(function(c){var a=$(this),d=a.attr("data-src");if(d!="")if(f[c]={dom:a,src:d,y:a.offset().top},a.css("height"))f[c].b=f[c].y+parseInt(a.css("height"));else if(a.attr("height"))f[c].b=f[c].y+parseInt(a.attr("height"))});g.scroll(j).resize(j);(i==""||$("a#"+i+"[name="+i+"]").length==0)&&j()})};
         setTimeout(function(){
             //优化加载
             new nie.util.pageLoad({
                 imgSelector:"img"
             });
         },0);

 ```
 注：用于图片较多且较长的页面，常用于官网。

>持续更新中...


