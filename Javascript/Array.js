/**
 *  Javascript Array
 *  
 */
        var pageIds = new Array();
        pageIds.push('A');

       // ���鳤��
        pageIds.length;

//shift��ɾ��ԭ�����һ�������ɾ��Ԫ�ص�ֵ���������Ϊ���򷵻�undefined
var a = [1,2,3,4,5];
var b = a.shift(); //a��[2,3,4,5]   b��1 

//unshift����������ӵ�ԭ���鿪ͷ������������ĳ���
var a = [1,2,3,4,5];
var b = a.unshift(-2,-1); //a��[-2,-1,1,2,3,4,5]   b��7
//ע����IE6.0�²��Է���ֵ��Ϊundefined��FF2.0�²��Է���ֵΪ7��������������ķ���ֵ���ɿ�����Ҫ�÷���ֵʱ����splice���汾������ʹ�á� 

//pop��ɾ��ԭ�������һ�������ɾ��Ԫ�ص�ֵ���������Ϊ���򷵻�undefined
var a = [1,2,3,4,5];
var b = a.pop(); //a��[1,2,3,4]   b��5 

//push����������ӵ�ԭ����ĩβ������������ĳ���
var a = [1,2,3,4,5];
var b = a.push(6,7); //a��[1,2,3,4,5,6,7]   b��7 

//concat������һ�������飬�ǽ�������ӵ�ԭ�����й��ɵ�
var a = [1,2,3,4,5];
var b = a.concat(6,7); //a��[1,2,3,4,5]   b��[1,2,3,4,5,6,7] 

//splice(start,deleteCount,val1,val2,)����startλ�ÿ�ʼɾ��deleteCount����Ӹ�λ�������val1,val2,
var a = [1,2,3,4,5];
var b = a.splice(2,2,7,8,9); //a��[1,2,7,8,9,5]   b��[3,4]
var b = a.splice(0,1); //ͬshift
a.splice(0,0,-2,-1); var b = a.length; //ͬunshift
var b = a.splice(a.length-1,1); //ͬpop
a.splice(a.length,0,6,7); var b = a.length; //ͬpush 

//reverse�������鷴��
var a = [1,2,3,4,5];
var b = a.reverse(); //a��[5,4,3,2,1]   b��[5,4,3,2,1] 

//sort(orderfunction)����ָ���Ĳ����������������
var a = [1,2,3,4,5];
var b = a.sort(); //a��[1,2,3,4,5]   b��[1,2,3,4,5] 

//slice(start,end)�����ش�ԭ������ָ����ʼ�±굽�����±�֮�������ɵ�������
var a = [1,2,3,4,5];
var b = a.slice(2,5); //a��[1,2,3,4,5]   b��[3,4,5] 

//join(separator)���������Ԫ������һ���ַ�������separatorΪ�ָ�����ʡ�ԵĻ�����Ĭ���ö���Ϊ�ָ���
var a = [1,2,3,4,5];
var b = a.join("�0�7"); //a��[1,2,3,4,5]   b��"1�0�72�0�73�0�74�0�75"
