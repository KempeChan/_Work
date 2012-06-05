/* 


·字符串(String)
  1.声明
    var myString = new String("Every good boy does fine.");
    var myString = "Every good boy does fine."; 

  2.字符串连接
    var myString = "Every " + "good boy " + "does fine.";
    var myString = "Every ";  myString += "good boy does fine."; 

  3.截取字符串
    //截取第 6 位开始的字符
    var myString = "Every good boy does fine.";
    var section = myString.substring(6);    //结果: "good boy does fine." 

    //截取第 0 位开始至第 10 位为止的字符
    var myString = "Every good boy does fine.";
    var section = myString.substring(0,10); //结果: "Every good" 

    //截取从第 11 位到倒数第 6 位为止的字符
    var myString = "Every good boy does fine.";
    var section = myString.slice(11,-6);    //结果: "boy does" 

    //从第 6 位开始截取长度为 4 的字符
    var myString = "Every good boy does fine.";
    var section = myString.substr(6,4);     //结果: "good" 

  4.转换大小写
    var myString = "Hello";
    var lcString = myString.toLowerCase();  //结果: "hello"
    var ucString = myString.toUpperCase();  //结果: "HELLO" 

  5.字符串比较
    var aString = "Hello!";
    var bString = new String("Hello!");
    if( aString == "Hello!" ){ }    //结果: true
    if( aString == bString ){ }     //结果: true
    if( aString === bString ){ }    //结果: false (两个对象不同,尽管它们的值相同) 

  6.检索字符串
    var myString = "hello everybody.";
    // 如果检索不到会返回-1,检索到的话返回在该串中的起始位置
    if( myString.indexOf("every") > -1 ){ } //结果: true 

  7.查找替换字符串
    var myString = "I is your father.";
    var result = myString.replace("is","am");   //结果: "I am your father." 

  8.特殊字符:
    \b : 后退符         \t : 水平制表符
    \n : 换行符         \v : 垂直制表符
    \f : 分页符         \r : 回车符
    \" : 双引号         \? : 单引号
    \\ : 反斜杆 

  9.将字符转换成Unicode编码
    var myString = "hello";
    var code = myString.charCodeAt(3);  //返回"l"的Unicode编码(整型)
    var char = String.fromCharCode(66); //返回Unicode为66的字符 

  10.将字符串转换成URL编码
    var myString = "hello all";
    var code = encodeURI(myString);     //结果: "hello%20all"
    var str = decodeURI(code);          //结果: "hello all"
    //相应的还有:  encodeURIComponent()  decodeURIComponent() 

 */
