/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * ��JSON����ת��Ϊ�ַ���.
 * @param {json����} json
 * @return {json�ַ���}
 */
function jsonObj2Str(json) {
        var str = "{";
        for (prop in json) {
                str += prop + ":" + json[prop] + ",";
        }
        str = str.substr(0, str.length - 1);
        str += "}";
        return str;
}

/**
 * ��json�ַ���ת��Ϊjson����.
 * @param {json�ַ���} jsonstr
 * @return {json����}
 */
function jsonStr2Obj(jsonstr) {
         return eval("("+jsonstr+")");
}

/**
 * �õ�һ��Ԫ�ص�left����ֵ.
 * @param {dom����} obj
 * @return {λ��ֵ}
 */
function getLeft(obj){
        var offset=e.offsetLeft;
        if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
        return offset;
} 

/**
 * �õ�һ��Ԫ�صľ���λ�õ�top����ֵ.
 * @param {dom����} obj
 * @return {λ��ֵ}
 */
function getTop(obj){
        var offset=e.offsetTop;
        if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
        return offset;
} 

/**
 * ɾ��һ���ַ��������ҿո�.
 * @param {ԭʼ�ַ���} str
 * @return {ɾ���ո�֮����ַ���}
 */
function  trim(str)
{
   return  str.replace(/(^\s*)?(\s*$)/g,"");
}

/**
 * ����idȡ��һ��Ԫ��.
 * @param {Ԫ��idֵ} str
 * @return {dom����}
 */
function $(str) {
        return document.getElementById(str);
}

/**
 * ��name��ȡһ������.
 * @param {Ԫ��nameֵ} str
 * @return {����name���صĵ�һ������}
 */
function $byName(str) {
        var arr = document.getElementsByName(str);
        if (arr)
                return arr[0];
        else
                return null;
}

/***************���·����ͱ���֤���*************************************************/
/**
 * ���طǿ��ַ���,�����Ĭ��ֵ�ͷ���Ĭ���ַ���.
 * @param {Ҫ����ת����ԭ�ַ���} str
 * @param {Ĭ��ֵ} defaultStr
 * @return {���ؽ��}
 */
function notNull(str, defaultStr) {
        if (typeof(str) == "undefined" ?? str == null ?? str == '') {
                if (defaultStr)
                        return defaultStr;
                else
                        return '';
        } else {
                return str;
        }
}  

/**
 * �Ƚ��������ڴ�С.
 * @param {��С���ڵ��ı���id} smallDate
 * @param {�ϴ����ڵ��ı���id} bigDate
 * @param {�������ʾ��Ϣ} msg
 */
function compareTwoDate(smallDate, bigDate, msg) {
        var v1 = $(smallDate).value;
        var v2 = $(bigDate).value;
        if (v1 >= v2) {
                alert(msg);
                                v2.focus();
                return false;
        }
        return true;
}

/**
 * �Ƚ���������С�ķ���.
 * @param {��С�Ľ��} smallNum
 * @param {�ϴ�Ľ��} bigNum
 * @param {������ʾ��Ϣ} msg
 * @return {Boolean}
 */
function compareTwoNum(smallNum, bigNum, msg) {
        var v1 = $(smallNum).value;
        var v2 = $(bigNum).value;
        if (parseFloat(v1) >= parseFloat(v2)) {
                alert(msg);
                                v2.focus();
                return false;
        }
        return true;
}

/**
 * ����ı���ĳ����Ƿ񳬳�ָ������.
 * @param {�ı�id} textId
 * @param {�ı������󳤶�} len
 * @param {�ı�����������} msg
 * @return {�д�ͷ���false,���򷵻�true}
 */
function checkLength(textId, len, msg) {
        obj = $(textId);
        str = obj.value;
        str = str.replace(/[^\x00-\xff]/g, "**");
        realLen = str.length;
        if (realLen > len) {
                alert("[" + msg + "]" + "�������Ϊ" + len + "λ," + "���������룡\nע�⣺һ������ռ2λ��");
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * �ж�ĳ���ı��򲻿���Ϊ��.
 * @param {�ı���id} textId
 * @param {�ı�����������} msg
 * @return {�д�ͷ���false,���򷵻�true}
 */
function checkIfEmpty(textId, msg) {
        var textObj = $(textId);
        var textValue = textObj.value;
        if (trim(textValue) == '') {
                alert('[' + msg + ']����Ϊ�գ�');
                textObj.focus();
                return false;
        } else {
                return true;
        }
}

/**
 * �ж�ָ���ı������ݱ���Ϊ�ʼ�.
 * @param {�ı���id} textId
 * @param {�ı�������} msg
 * @return {������ʼ����ݾͷ���true���򷵻�false}
 */
function checkIsMail(textId, msg) {
        var obj = $(textId);
        if (!_isEmail(obj.value)) {
                alert('[' + msg + ']���ǺϷ����ʼ���ַ��');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * ��֤�ǲ����ʼ�.
 * @param {Ҫ��֤���ַ���} strEmail
 * @return {Boolean}
 */
function _isEmail(strEmail) {
        //����������֤�Ƿ����������ϵġ�.���ţ��еĻ����Ǵ�ģ�
        var first = strEmail.indexOf('.');
        if (strEmail.indexOf('@')== -1) {
                return false;
        }
        var tempStr = strEmail.substring(first + 1);
         if (tempStr.indexOf('.') != -1) {
                return false;
        }
        if (strEmail
                        .search(/^\w+((-\w+)?(\.\w+))*\@[A-Za-z0-9]+((\.?-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
                return true;
        } else
                return false;
}

/**
 * �ж�ĳ���ı����Ƿ�����.
 * @param {�ı���id} textId
 * @param {�ı�����������} msg
 * @return {Boolean}
 */
function checkIsNum(textId, msg) {
        obj = $(textId);
        if (isNaN(obj.value)) {
                alert('[' + msg + ']����Ϊ���֡�');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * �ж�ĳ���ı����Ƿ��зǷ��ַ�.
 * @param {�ı����id} textId
 * @param {�ı�����������} msg
 * @return {�д�ͷ���false���򷵻�true}
 */
function checkIsValid(textId, msg) {
        obj = $(textId);
        if (!_isValidString(obj.value, '[' + msg + ']���ú��зǷ��ַ���')) {
                obj.focus();
                return false;
        }
        return true;
}

/**
 * �ж��ǲ��ǺϷ��ַ���.
 * @param {Ҫ�����жϵ��ַ���} szStr
 * @param {�ı�����} errMsg
 * @return {�Ϸ��򷵻�true���򷵻�false}
 */
function _isValidString(szStr,errMsg) {
        voidChar = "'\"><`~!@#$%^&\(\)��������������?��������*";
        for (var i = 0; i < voidChar.length; i++) {
                aChar = voidChar.substring(i, i + 1);
                if (szStr.indexOf(aChar) > -1){
                        alert(errMsg)
                        return false;
                }
        }
        return true;
} 

/*************** ���·����������˵����*************************************************/
/**
 * ���������˵�������Ϊ-1(δѡ�����value=-1)
 * @param {�����˵�id} selectId
 * @param {�����˵���������} msg
 * @param {�����˵��Ŀ�ֵ��Ӧ��value,Ĭ��Ϊ-1} nullValue
 * @return {Boolean}
 */
function checkChooseSelect(selectId, msg ,nullValue) {
        var obj = $(selectId);
        if (obj.value == notNull(nullValue,'-1')) {
                alert('[' + msg + ']��ѡ!');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * �õ������˵�����ʾ������.
 * @param {�����˵�dom����} selectObj
 * @return {���������˵�����ʾ��"�ı�"}
 */
function getSelectText(selectObj) {
       return selectObj.options[selectObj.selectedIndex].text;
}

/**
 * �õ������˵�����ʾ��ֵ.
 * @param {�����˵�dom����} selectObj
 * @return {�õ������˵�����ʾ��"ֵ"}
 */
function getSelectValue(selectObj) {
        return selectObj.options[selectObj.selectedIndex].value;
}

/**
 * ���������˵���ѡ��״̬��ָ����ֵ.
 * @param {�����˵�����} obj
 * @param {Ҫѡ���ֵ} value
 */
function setSelectValue(obj, value) {
        /*for (i = obj.options.length - 1; i >= 0; i--) {
                if (obj.options[i].value == value) {
                        obj.options[i].selected = true;
                        return;
                }
        }
*/
      obj.value= value;
}

/**
 * ���ݼ�ֵ�������ݽ��������˵��Ķ�̬��װ
 * @param {Ҫ���������˵���װ��dom����} obj
 * @param {��ֵ����,��;�ָ�,����'1,��;2,Ů;3,δ֪'} valAndText
 */
function setSelectContent(obj,valAndText){
        if(trim(valAndText)==''){
                alert('û��Ҫ������װ�����˵�������!');
                return false;
        }
        clearSelect(obj);
        var keyandvalues = valAndText.split(';');
        for(var i=0;i<keyandvalues.length;i++){
                var arr = keyandvalues[i].split(',');
                if(arr){
                        var value =arr[0];
                        var text =arr[1];
                        var objOption = new Option(text,value);
                        obj.add(objOption);
                }
        }
}

/**
 * ��������˵����������.
 * @param {�����˵�����} obj
 */
function clearSelect(obj) {
    for (var i=obj.options.length; i >0; i--) {
        obj.remove(0);
    }
} 

/*************** ���·����Ͷ�ѡ�����*************************************************/
/**
 * ����ѡ�е�checks��id��ɵ��ַ���,���Ÿ���.
 * @param {checks����} checks
 * @return ѡ���id��ɵ��ַ���
 */
function getCheckedIds(checks){
        var selectedValue = '';
        var len = checks.length;
        for(var index=0; index<len; index++) {
        if(checks[index].checked==true) {
            selectedValue +=  checks[index].value+",";
        }
    }
        if(selectedValue.length>0)
                return selectedValue.substring(0,selectedValue.length-1);
    return selectedValue;
}
/********************************************HTML*********************************************************/
<HTML>
        <HEAD>
                <script language="javascript" src="aaaaa.js"></script>
        </HEAD>
        <SCRIPT LANGUAGE="JavaScript">
<!--
/**
 * ����֤��ʾ��js����.
 */
function check(){
        if(checkIfEmpty('a','�ǿ�У��')
                &&checkIsMail('b','����У��')
                &&checkIsNum('c','����У��')
                &&checkIsValid('d','�Ϸ���У��')
                &&compareTwoDate('e','f','С����������ڹ�ϵ����!')
                &&checkLength('g',5,'����У��')
                &&checkChooseSelect('h','�����˵��ǿ�','-1')
                &&compareTwoNum('k','l','��С��Ŀ��ϵ����ȷ!')){
                alert('У��ͨ��!');
                return true;
        }else{
                return false;
        }
}

/**
 * ȡ�����˵���ֵ���ı���ʾ��js����.
 */
function getSelect(){
        var sss = $('h');
        alert('�����˵�ѡ����ı���:'+getSelectText(sss)+'\n'
                        +'�����˵�ѡ���ֵ��:'+getSelectValue(sss));
}

/**
 * ���ݼ�ֵ�ַ������������˵�����ʾ����.
 */
function setSelect(){
        var sss = $('i').value;
        setSelectContent($('h'),sss);
}

/**
 * ���ض�ѡ������ѡ��״̬��id���ַ���,����Զ��Ÿ���.
 */
function getMulti(){
        alert('��ѡѡ���id��:'+getCheckedIds(document.getElementsByName('j')));
}
//-->
</SCRIPT>
        <BODY>
                <table>
                        <tr>
                                <td>
                                        �ǿ�:
                                        <input id='a'>
                                </td>
                                <td>
                                        checkIfEmpty('a','�ǿ�У��')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        ����:
                                        <input id='b' value='323232@2323.com'>
                                </td>
                                <td>
                                        checkIsMail('b','����У��')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        ����:
                                        <input id='c' value='aaaa'>
                                </td>
                                <td>
                                        checkIsNum('c','����У��')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        �Ϸ��ַ�:
                                        <input id='d' value='@$@$#$#!%%#'>
                                </td>
                                <td>
                                        checkIsValid('d','�Ϸ���У��')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        С������:
                                        <input id='e' value='2010-1-1'>
                                        �������:
                                        <input id='f' value='2011-1-1'>
                                </td>
                                <td>
                                        compareTwoDate('e','f','С����������ڹ�ϵ����!')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        С����:
                                        <input id='k' value='12.3'>
                                        �����:
                                        <input id='l' value='4564'>
                                </td>
                                <td>
                                        compareTwoNum('k','l','��С��Ŀ��ϵ����ȷ!')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        �ַ�����У��(<5):
                                        <input id='g'>
                                </td>
                                <td>
                                        checkLength('g',5,'����У��')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        �����˵��ǿ�У��:
                                        <select id='h'>
                                                <option value='-1'>
                                                        ��ѡ��
                                                </option>
                                                <option value='1'>
                                                        ����
                                                </option>
                                                <option value='2'>
                                                        ����
                                                </option>
                                        </select>
                                </td>
                                <td>
                                        checkChooseSelect('h','�����˵��ǿ�','-1')
                                </td>
                        </tr>
                        <tr>
                                <td colspan='2'>
                                        <button onclick='check()'>
                                                ���Ա�У�鷽��
                                        </button>
                                </td>
                        </tr>
                        <tr>
                                <td>

                                        <button onclick='getSelect()'>
                                                �õ������˵���ֵ
                                        </button>
                                </td>
                                <td>
                                        getSelectText(sss)��getSelectValue(sss)
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        ���������˵��ļ�ֵ�ַ���(������ʾ)
                                        <input id='i' value='1,��;2,Ů;3,δ֪'>
                                        <button onclick='setSelect()'>
                                                ���������˵���ֵ
                                        </button>
                                </td>
                                <td>
                                        setSelectContent($('h'),sss)
                                </td>
                        </tr>
                        <tr>
                                <td>

                                        <input type='checkbox' name='j' value='aaa1'>
                                        <input type='checkbox' name='j' value='aaa2'>
                                        <input type='checkbox' name='j' value='aaa3'>
                                        <input type='checkbox' name='j' value='aaa4'>
                                        <button onclick='getMulti()'>
                                                �õ���ѡѡ���id
                                        </button>
                                </td>
                                <td>
                                        getCheckedIds(document.getElementsByName('j'))
                                </td>
                        </tr>
                </table>
        </BODY>
</HTML>