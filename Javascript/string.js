/* 


���ַ���(String)
  1.����
    var myString = new String("Every good boy does fine.");
    var myString = "Every good boy does fine."; 

  2.�ַ�������
    var myString = "Every " + "good boy " + "does fine.";
    var myString = "Every ";  myString += "good boy does fine."; 

  3.��ȡ�ַ���
    //��ȡ�� 6 λ��ʼ���ַ�
    var myString = "Every good boy does fine.";
    var section = myString.substring(6);    //���: "good boy does fine." 

    //��ȡ�� 0 λ��ʼ���� 10 λΪֹ���ַ�
    var myString = "Every good boy does fine.";
    var section = myString.substring(0,10); //���: "Every good" 

    //��ȡ�ӵ� 11 λ�������� 6 λΪֹ���ַ�
    var myString = "Every good boy does fine.";
    var section = myString.slice(11,-6);    //���: "boy does" 

    //�ӵ� 6 λ��ʼ��ȡ����Ϊ 4 ���ַ�
    var myString = "Every good boy does fine.";
    var section = myString.substr(6,4);     //���: "good" 

  4.ת����Сд
    var myString = "Hello";
    var lcString = myString.toLowerCase();  //���: "hello"
    var ucString = myString.toUpperCase();  //���: "HELLO" 

  5.�ַ����Ƚ�
    var aString = "Hello!";
    var bString = new String("Hello!");
    if( aString == "Hello!" ){ }    //���: true
    if( aString == bString ){ }     //���: true
    if( aString === bString ){ }    //���: false (��������ͬ,�������ǵ�ֵ��ͬ) 

  6.�����ַ���
    var myString = "hello everybody.";
    // ������������᷵��-1,�������Ļ������ڸô��е���ʼλ��
    if( myString.indexOf("every") > -1 ){ } //���: true 

  7.�����滻�ַ���
    var myString = "I is your father.";
    var result = myString.replace("is","am");   //���: "I am your father." 

  8.�����ַ�:
    \b : ���˷�         \t : ˮƽ�Ʊ��
    \n : ���з�         \v : ��ֱ�Ʊ��
    \f : ��ҳ��         \r : �س���
    \" : ˫����         \? : ������
    \\ : ��б�� 

  9.���ַ�ת����Unicode����
    var myString = "hello";
    var code = myString.charCodeAt(3);  //����"l"��Unicode����(����)
    var char = String.fromCharCode(66); //����UnicodeΪ66���ַ� 

  10.���ַ���ת����URL����
    var myString = "hello all";
    var code = encodeURI(myString);     //���: "hello%20all"
    var str = decodeURI(code);          //���: "hello all"
    //��Ӧ�Ļ���:  encodeURIComponent()  decodeURIComponent() 

 */
