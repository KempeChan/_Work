/*
������(Number)
  1.����
    var i = 1;
    var i = new Number(1); 

  2.�ַ��������ּ��ת��
    var i = 1;
    var str = i.toString();     //���: "1"
    var str = new String(i);    //���: "1"
    i = parseInt(str);          //���: 1
    i = parseFloat(str);        //���: 1.0 

    //ע��: parseInt,parseFloat���һ��������"32G"���ַ���,ǿ��ת����32 

  3.�ж��Ƿ�Ϊ��Ч������
    var i = 123;  var str = "string";
    if( typeof i == "number" ){ }   //true 

    //ĳЩ����(��:parseInt,parseFloat)�᷵��һ�������ֵNaN(Not a Number)
    //��ע���2���е�[ע��],�˷�������ȫ�ʺ��ж�һ���ַ����Ƿ���������!!
    i = parseInt(str);
    if( isNaN(i) ){ } 

  4.�����ͱȽ�
    //��֪ʶ��[�ַ����Ƚ�]��ͬ 

  5.С��ת����
    var f = 1.5;
    var i = Math.round(f);  //���:2 (��������)
    var i = Math.ceil(f);   //���:2 (���ش���f����С����)
    var i = Math.floor(f);  //���:1 (����С��f���������) 

  6.��ʽ����ʾ����
    var i = 3.14159; 

    //��ʽ��Ϊ��λС���ĸ�����
    var str = i.toFixed(2);     //���: "3.14" 

    //��ʽ��Ϊ��λ���ֵĸ�����(��������λ����,��������)
    var str = i.toPrecision(5); //���: "3.1415" 

  7.X�������ֵ�ת��
    //���Ǻܶ� -.-
    var i = parseInt("0x1f",16);
    var i = parseInt(i,10);
    var i = parseInt("11010011",2); 

  8.�����
    //����0-1֮�������С��
    var rnd = Math.random();
    //����0-n֮�����������(������n)
    var rnd = Math.floor(Math.random() * n) 
    */