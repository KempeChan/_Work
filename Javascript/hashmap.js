/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function HashMap()
 {
     /** Map ��С **/
     var size = 0;
     /** ���� **/
     var entry = new Object();   

     /** �� **/
     this.put = function (key , value)
     {
         if(!this.containsKey(key))
         {
             size ++ ;
         }
         entry[key] = value;
     }   

     /** ȡ **/
     this.get = function (key)
     {
         return this.containsKey(key) ? entry[key] : null;
     }   

     /** ɾ�� **/
     this.remove = function ( key )
     {
         if( this.containsKey(key) && ( delete entry[key] ) )
         {
             size --;
         }
     }   

     /** �Ƿ���� Key **/
     this.containsKey = function ( key )
     {
         return (key in entry);
     }   

     /** �Ƿ���� Value **/
     this.containsValue = function ( value )
     {
         for(var prop in entry)
         {
             if(entry[prop] == value)
             {
                 return true;
             }
         }
         return false;
     }   

     /** ���� Value **/
     this.values = function ()
     {
         var values = new Array();
         for(var prop in entry)
         {
             values.push(entry[prop]);
         }
         return values;
     }   

     /** ���� Key **/
     this.keys = function ()
     {
         var keys = new Array();
         for(var prop in entry)
         {
             keys.push(prop);
         }
         return keys;
     }   

     /** Map Size **/
     this.size = function ()
     {
         return size;
     }   

     /* ��� */
     this.clear = function ()
     {
         size = 0;
         entry = new Object();
     }
 }   

 var map = new HashMap();   

 /*
 map.put("A","1");
 map.put("B","2");
 map.put("A","5");
 map.put("C","3");
 map.put("A","4");
 */
 /*
 alert(map.containsKey("XX"));
 alert(map.size());
 alert(map.get("A"));
 alert(map.get("XX"));
 map.remove("A");
 alert(map.size());
 alert(map.get("A"));
 */  

 /** ͬʱҲ���԰Ѷ�����Ϊ Key **/
 /*
 var arrayKey = new Array("1","2","3","4");
 var arrayValue = new Array("A","B","C","D");
 map.put(arrayKey,arrayValue);
 var value = map.get(arrayKey);
 for(var i = 0 ; i < value.length ; i++)
 {
     //alert(value[i]);
 }
 */
 /** �Ѷ�����ΪKeyʱ ���Զ������˸ö���� toString() ���� ��ʵ���ջ�����String����ΪKey**/  

 /** ������Զ������ ���Լ�����д toString() ���� ���� . ��������Ľ�� **/  

 function MyObject(name)
 {
     this.name = name;
 }   

 /**
 function MyObject(name)
 {
     this.name = name;  

     this.toString = function ()
     {
         return this.name;
     }
 }
 **/
 var object1 = new MyObject("С��");
 var object2 = new MyObject("С��");   

 map.put(object1,"С��");
 map.put(object2,"С��");
 alert(map.get(object1));
 alert(map.get(object2));
 map.remove("xxxxx");
 alert(map.size());   

 /** ���н�� С�� С�� size = 1 **/  

 /** ����ĳɸ�дtoString()�����Ķ��� , Ч������ȫ��һ���� **/  

 </script>  
