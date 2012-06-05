/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.


1.浏览器名称
   //IE : "Microsoft Internet Explorer"
   //NS : "Netscape"
   var browserName = navigator.appName; 

 2.浏览器版本
   bar browserVersion = navigator.appVersion; 

 3.客户端操作系统
   var isWin = ( navigator.userAgent.indexOf("Win") != -1 );
   var isMac = ( navigator.userAgent.indexOf("Mac") != -1 );
   var isUnix = ( navigator.userAgent.indexOf("X11") != -1 ); 

 4.判断是否支持某对象,方法,属性
   //当一个对象,方法,属性未定义时会返回undefined或null等,这些特殊值都是false
   if( document.images ){ }
   if( document.getElementById ){ } 

 5.检查浏览器当前语言
   if( navigator.userLanguage ){ var l = navigator.userLanguage.toUpperCase(); } 

 6.检查浏览器是否支持Cookies
   if( navigator.cookieEnabled ){ } 
    */
