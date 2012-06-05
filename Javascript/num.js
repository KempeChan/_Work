/*
数字型(Number)
  1.声明
    var i = 1;
    var i = new Number(1); 

  2.字符串与数字间的转换
    var i = 1;
    var str = i.toString();     //结果: "1"
    var str = new String(i);    //结果: "1"
    i = parseInt(str);          //结果: 1
    i = parseFloat(str);        //结果: 1.0 

    //注意: parseInt,parseFloat会把一个类似于"32G"的字符串,强制转换成32 

  3.判断是否为有效的数字
    var i = 123;  var str = "string";
    if( typeof i == "number" ){ }   //true 

    //某些方法(如:parseInt,parseFloat)会返回一个特殊的值NaN(Not a Number)
    //请注意第2点中的[注意],此方法不完全适合判断一个字符串是否是数字型!!
    i = parseInt(str);
    if( isNaN(i) ){ } 

  4.数字型比较
    //此知识与[字符串比较]相同 

  5.小数转整数
    var f = 1.5;
    var i = Math.round(f);  //结果:2 (四舍五入)
    var i = Math.ceil(f);   //结果:2 (返回大于f的最小整数)
    var i = Math.floor(f);  //结果:1 (返回小于f的最大整数) 

  6.格式化显示数字
    var i = 3.14159; 

    //格式化为两位小数的浮点数
    var str = i.toFixed(2);     //结果: "3.14" 

    //格式化为五位数字的浮点数(从左到右五位数字,不够补零)
    var str = i.toPrecision(5); //结果: "3.1415" 

  7.X进制数字的转换
    //不是很懂 -.-
    var i = parseInt("0x1f",16);
    var i = parseInt(i,10);
    var i = parseInt("11010011",2); 

  8.随机数
    //返回0-1之间的任意小数
    var rnd = Math.random();
    //返回0-n之间的任意整数(不包括n)
    var rnd = Math.floor(Math.random() * n) 
    */