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

 >持续更新中...


 **相关UI组件**
 --------------------
 常用组件以及效果，熟悉掌握常用组件和效果，可以大大提高开发效率，并且有效达到标准
 所有页面一定都要引入一个jquery(mixNIE).last.js ，这除了是一个轻量级的JS库，还有已封装好的组件功能和统计检测功能，其中包括：

 1、TAB切换
 使用方法：http://jsdoc.nb.netease.com/$.tab.html
 参考地址：http://x3.163.com/index.html
 PS：带回调函数$.tab(".fnav a",".imgs > div",{fn:function(i){ }}）

 2、 Swithch图片切换
 使用方法：http://jsdoc.nb.netease.com/$.Switch.html
 参考地址： http://x3.163.com/index.html

 3、插入flash(需要先判断该浏览器是否支持flash)
 使用方法：http://jsdoc.nb.netease.com/$.swfobject.html
 参考地址：http://wh.163.com/index.html

 4、插入视频，要保证f4v和mp4格式并存，特殊说明除外（使用jQuery组件nie.util.video）
 var video=nie.util.video($(".imgs"),{
                     movieUrl:”地址”,
                     mp4_movieUrl:”地址”,
                     width:655,
                     height:370,
                     bufferTime:5,
                     loopTimes:0,
                     wmode:"transpant",
                     volume:0.8,//默认0.8为参数值
                     startImg:”地址”,
                     autoPlay:false
                 });
 video.change(movieURL);//改变视频地址
 video.pause();//暂停视频
 video.stop();//停止视频
 video.play();//播放视频
 video.destroy();//清空并销毁视频

 5、回到顶部
 使用方法：http://jsdoc.nb.netease.com/$.scrollTo.html
 参考地址：http://xyq.163.com/introduce/cy002.html

 6、光箱lightbox效果
 使用方法：http://jsdoc.nb.netease.com/$.lightBox.html
 参考地址：http://wh.163.com/

 7、复制黏贴
 使用方法：http://jsdoc.nb.netease.com/$.clipBoard.html
 参考地址：http://x3.163.com/rank/

 8、Marquee走马灯
 使用方法：http://jsdoc.nb.netease.com/$.marquee2.html
 参考地址：http://wh.163.com/

 9、分享组件
 使用方法：http://res.nie.netease.com/comm/js/nie/util/share/share.html
 参考地址：http://xyq.163.com/chongyang/

 10、注册功能
 使用方法：http://res.nie.netease.com/comm/js/nie/util/qUrs/index.html
 参考地址：http://wh.163.com/

 11、获取服务器时间
 使用方法：http://jsdoc.nb.netease.com/$.bjTime.html
 参考地址：http://wh.163.com/

 12、Cookie设置
 使用方法：http://jsdoc.nb.netease.com/$.cookie.html
 参考地址：global.js http://y3.163.com/db/hero/

 还有一些不太常用的方法，可以参考http://jsdoc.nb.netease.com/ 。

 除此之外，官网有一些常用效果并没有收入进库，为你推荐常用的效果，参考地址中均包含代码，以供参考：
 1、弹窗
 参考地址：http://dtws2.163.com/index.html
 代码请参考：opendv()和closedv()
 注：position统一为absolute，并加判断当弹窗高度大于浏览器高度时，置顶于浏览器，其他情况在页面正中。
 此函数独立open和close两个函数，不要利用$().click(function(){})的形式，是为了能方便调用。

 2、轮播
 参考地址：http://dtws2.163.com/index.html
 代码请参考：picScroll()


 3、Png8图片修复
 参考地址：http://jquery.andreaseberhard.de/pngFix/
 线上使用：http://x3.163.com/index.html
 请参考代码：DD_belatedPNG.fix

 4、图片延迟加载
 参考地址：http://wh.163.com/index.html
 代码请参考：nie.util.pageLoad
 注：用于图片较多且较长的页面，常用于官网。

 5、搜索功能
 参考地址：http://xyq.163.com/ （游戏百科搜索）http://x3.163.com/news/ （有道搜索）
