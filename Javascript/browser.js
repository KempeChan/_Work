/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.


1.���������
   //IE : "Microsoft Internet Explorer"
   //NS : "Netscape"
   var browserName = navigator.appName; 

 2.������汾
   bar browserVersion = navigator.appVersion; 

 3.�ͻ��˲���ϵͳ
   var isWin = ( navigator.userAgent.indexOf("Win") != -1 );
   var isMac = ( navigator.userAgent.indexOf("Mac") != -1 );
   var isUnix = ( navigator.userAgent.indexOf("X11") != -1 ); 

 4.�ж��Ƿ�֧��ĳ����,����,����
   //��һ������,����,����δ����ʱ�᷵��undefined��null��,��Щ����ֵ����false
   if( document.images ){ }
   if( document.getElementById ){ } 

 5.����������ǰ����
   if( navigator.userLanguage ){ var l = navigator.userLanguage.toUpperCase(); } 

 6.���������Ƿ�֧��Cookies
   if( navigator.cookieEnabled ){ } 
    */
