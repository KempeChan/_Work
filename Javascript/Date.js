/**
 *  
 *  Javascript Date Object
 * 
 */

// 1. 声明
    var myDate = new Date();    //系统当前时间
    var myDate = new Date(yyyy, mm, dd, hh, mm, ss);
    var myDate = new Date(yyyy, mm, dd);
    var myDate = new Date("monthName dd, yyyy hh:mm:ss");
    var myDate = new Date("monthName dd, yyyy");
    var myDate = new Date(epochMilliseconds); 

//  2.获取时间的某部份
    var myDate = new Date();
    myDate.getYear();       //获取当前年份(2位)
    myDate.getFullYear();   //获取完整的年份(4位,1970-????)
    myDate.getMonth();      //获取当前月份(0-11,0代表1月)
    myDate.getDate();       //获取当前日(1-31)
    myDate.getDay();        //获取当前星期X(0-6,0代表星期天)
    myDate.getTime();       //获取当前时间(从1970.1.1开始的毫秒数)   时间戳！！
    myDate.getHours();      //获取当前小时数(0-23)
    myDate.getMinutes();    //获取当前分钟数(0-59)
    myDate.getSeconds();    //获取当前秒数(0-59)
    myDate.getMilliseconds();   //获取当前毫秒数(0-999)
    myDate.toLocaleDateString();    //获取当前日期
    myDate.toLocaleTimeString();    //获取当前时间
    myDate.toLocaleString( );       //获取日期与时间 

 // 3.计算之前或未来的时间
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 10);  //当前时间加10天
    //类似的方法都基本相同,以set开头,具体参考第2点 

//4.计算两个日期的偏移量
    var i = daysBetween(beginDate,endDate); //返回天数
    var i = beginDate.getTimezoneOffset(endDate); //返回分钟数 

//  5.检查有效日期
    //checkDate() 只允许"mm-dd-yyyy"或"mm/dd/yyyy"两种格式的日期
    if( checkDate("2006-01-01") ){ } 

    //正则表达式(自己写的检查 yyyy-mm-dd, yy-mm-dd, yyyy/mm/dd, yy/mm/dd 四种)
    var r = /^(\d{2}¦\d{4})[\/-]\d{1,2}[\/-]\d{1,2}$/;
    if( r.test( myString ) ){ } 