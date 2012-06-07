<?php

/*
 *  iframe 高度自适应
 * 
 *         需求: 
 *                    iframe高度自适应，如果iframe始终调用同一个固定高度的页面，我们直接写死iframe高度就可以。
 *                    而如果iframe要切换页面，或者被包含页面要做DOM动态操作，这时候，就需要程序去同步iframe高度和被包含页的实际高度。 
 * 
 *         解决方法: 
 * 
 *                    方法一，在每个被包含页在本身内容加载完毕之后，执行JS取得本页面的高度，然后去同步父页面的iframe高度。(该方法需要每个页面都添加js代码)
 *                    方法二，在主页面iframe的onload事件中执行JS，去取得被包含页的高度内容，然后去同步高度。
 *                    方法三，主窗口做一个Interval，不停的来获取被包含页的高度，
 * 
 *                    方法一、二都只处理了静的东西，就是只在内容加载的时候执行，如果JS去操作DOM引起的高度变化，都不太方便。
 * 
 *         问题: 如何正确获取页面的高度
 */

?>

<iframe id="frame_content" src="iframe_b.html" scrolling="no" frameborder="0"
 onload="this.height=100"></iframe>

<script type="text/javascript">
           function reinitIframe(){
                      var iframe = document.getElementById("frame_content");
                      try{
                                 var bHeight = iframe.contentWindow.document.body.scrollHeight;
                                 var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                                 var height = Math.max(bHeight, dHeight);
                                 iframe.height =  height;
                      }catch (ex){}
           }
           window.setInterval("reinitIframe()", 200);
</script>