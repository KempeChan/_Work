/**
 *  
 *  Javascript Date Object
 * 
 */

// 1. ����
    var myDate = new Date();    //ϵͳ��ǰʱ��
    var myDate = new Date(yyyy, mm, dd, hh, mm, ss);
    var myDate = new Date(yyyy, mm, dd);
    var myDate = new Date("monthName dd, yyyy hh:mm:ss");
    var myDate = new Date("monthName dd, yyyy");
    var myDate = new Date(epochMilliseconds); 

//  2.��ȡʱ���ĳ����
    var myDate = new Date();
    myDate.getYear();       //��ȡ��ǰ���(2λ)
    myDate.getFullYear();   //��ȡ���������(4λ,1970-????)
    myDate.getMonth();      //��ȡ��ǰ�·�(0-11,0����1��)
    myDate.getDate();       //��ȡ��ǰ��(1-31)
    myDate.getDay();        //��ȡ��ǰ����X(0-6,0����������)
    myDate.getTime();       //��ȡ��ǰʱ��(��1970.1.1��ʼ�ĺ�����)   ʱ�������
    myDate.getHours();      //��ȡ��ǰСʱ��(0-23)
    myDate.getMinutes();    //��ȡ��ǰ������(0-59)
    myDate.getSeconds();    //��ȡ��ǰ����(0-59)
    myDate.getMilliseconds();   //��ȡ��ǰ������(0-999)
    myDate.toLocaleDateString();    //��ȡ��ǰ����
    myDate.toLocaleTimeString();    //��ȡ��ǰʱ��
    myDate.toLocaleString( );       //��ȡ������ʱ�� 

 // 3.����֮ǰ��δ����ʱ��
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 10);  //��ǰʱ���10��
    //���Ƶķ�����������ͬ,��set��ͷ,����ο���2�� 

//4.�����������ڵ�ƫ����
    var i = daysBetween(beginDate,endDate); //��������
    var i = beginDate.getTimezoneOffset(endDate); //���ط����� 

//  5.�����Ч����
    //checkDate() ֻ����"mm-dd-yyyy"��"mm/dd/yyyy"���ָ�ʽ������
    if( checkDate("2006-01-01") ){ } 

    //������ʽ(�Լ�д�ļ�� yyyy-mm-dd, yy-mm-dd, yyyy/mm/dd, yy/mm/dd ����)
    var r = /^(\d{2}�0�7\d{4})[\/-]\d{1,2}[\/-]\d{1,2}$/;
    if( r.test( myString ) ){ } 