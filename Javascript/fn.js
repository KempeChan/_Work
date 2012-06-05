/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * 对JSON对象转换为字符串.
 * @param {json对象} json
 * @return {json字符串}
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
 * 将json字符串转换为json对象.
 * @param {json字符串} jsonstr
 * @return {json对象}
 */
function jsonStr2Obj(jsonstr) {
         return eval("("+jsonstr+")");
}

/**
 * 得到一个元素的left坐标值.
 * @param {dom对象} obj
 * @return {位置值}
 */
function getLeft(obj){
        var offset=e.offsetLeft;
        if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
        return offset;
} 

/**
 * 得到一个元素的绝对位置的top坐标值.
 * @param {dom对象} obj
 * @return {位置值}
 */
function getTop(obj){
        var offset=e.offsetTop;
        if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
        return offset;
} 

/**
 * 删除一个字符串的左右空格.
 * @param {原始字符串} str
 * @return {删除空格之后的字符串}
 */
function  trim(str)
{
   return  str.replace(/(^\s*)?(\s*$)/g,"");
}

/**
 * 根据id取出一个元素.
 * @param {元素id值} str
 * @return {dom对象}
 */
function $(str) {
        return document.getElementById(str);
}

/**
 * 按name获取一个对象.
 * @param {元素name值} str
 * @return {根据name返回的第一个对象}
 */
function $byName(str) {
        var arr = document.getElementsByName(str);
        if (arr)
                return arr[0];
        else
                return null;
}

/***************以下方法和表单验证相关*************************************************/
/**
 * 返回非空字符串,如果有默认值就返回默认字符串.
 * @param {要进行转换的原字符串} str
 * @param {默认值} defaultStr
 * @return {返回结果}
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
 * 比较两个日期大小.
 * @param {较小日期的文本框id} smallDate
 * @param {较大日期的文本框id} bigDate
 * @param {出错的提示信息} msg
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
 * 比较两个金额大小的方法.
 * @param {较小的金额} smallNum
 * @param {较大的金额} bigNum
 * @param {出错提示信息} msg
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
 * 检查文本框的长度是否超出指定长度.
 * @param {文本id} textId
 * @param {文本框的最大长度} len
 * @param {文本框描述内容} msg
 * @return {有错就返回false,否则返回true}
 */
function checkLength(textId, len, msg) {
        obj = $(textId);
        str = obj.value;
        str = str.replace(/[^\x00-\xff]/g, "**");
        realLen = str.length;
        if (realLen > len) {
                alert("[" + msg + "]" + "长度最大为" + len + "位," + "请重新输入！\n注意：一个汉字占2位。");
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * 判断某个文本框不可以为空.
 * @param {文本框id} textId
 * @param {文本框描述内容} msg
 * @return {有错就返回false,否则返回true}
 */
function checkIfEmpty(textId, msg) {
        var textObj = $(textId);
        var textValue = textObj.value;
        if (trim(textValue) == '') {
                alert('[' + msg + ']不得为空！');
                textObj.focus();
                return false;
        } else {
                return true;
        }
}

/**
 * 判断指定文本框内容必须为邮件.
 * @param {文本框id} textId
 * @param {文本框描述} msg
 * @return {如果是邮件内容就返回true否则返回false}
 */
function checkIsMail(textId, msg) {
        var obj = $(textId);
        if (!_isEmail(obj.value)) {
                alert('[' + msg + ']不是合法的邮件地址！');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * 验证是不是邮件.
 * @param {要验证的字符串} strEmail
 * @return {Boolean}
 */
function _isEmail(strEmail) {
        //接下来的验证是否有两个以上的‘.’号，有的话就是错的！
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
 * 判断某个文本框是否数字.
 * @param {文本框id} textId
 * @param {文本框描述内容} msg
 * @return {Boolean}
 */
function checkIsNum(textId, msg) {
        obj = $(textId);
        if (isNaN(obj.value)) {
                alert('[' + msg + ']必须为数字。');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * 判断某个文本框是否含有非法字符.
 * @param {文本框的id} textId
 * @param {文本框描述内容} msg
 * @return {有错就返回false否则返回true}
 */
function checkIsValid(textId, msg) {
        obj = $(textId);
        if (!_isValidString(obj.value, '[' + msg + ']不得含有非法字符。')) {
                obj.focus();
                return false;
        }
        return true;
}

/**
 * 判断是不是合法字符串.
 * @param {要进行判断的字符串} szStr
 * @param {文本描述} errMsg
 * @return {合法则返回true否则返回false}
 */
function _isValidString(szStr,errMsg) {
        voidChar = "'\"><`~!@#$%^&\(\)（）！￥……？?“”‘’*";
        for (var i = 0; i < voidChar.length; i++) {
                aChar = voidChar.substring(i, i + 1);
                if (szStr.indexOf(aChar) > -1){
                        alert(errMsg)
                        return false;
                }
        }
        return true;
} 

/*************** 以下方法和下拉菜单相关*************************************************/
/**
 * 控制下拉菜单不可以为-1(未选择情况value=-1)
 * @param {下拉菜单id} selectId
 * @param {下拉菜单描述内容} msg
 * @param {下拉菜单的空值对应的value,默认为-1} nullValue
 * @return {Boolean}
 */
function checkChooseSelect(selectId, msg ,nullValue) {
        var obj = $(selectId);
        if (obj.value == notNull(nullValue,'-1')) {
                alert('[' + msg + ']必选!');
                obj.focus();
                return false;
        } else
                return true;
}

/**
 * 得到下拉菜单的显示的文字.
 * @param {下拉菜单dom对象} selectObj
 * @return {返回下拉菜单的显示的"文本"}
 */
function getSelectText(selectObj) {
       return selectObj.options[selectObj.selectedIndex].text;
}

/**
 * 得到下拉菜单的显示的值.
 * @param {下拉菜单dom对象} selectObj
 * @return {得到下拉菜单的显示的"值"}
 */
function getSelectValue(selectObj) {
        return selectObj.options[selectObj.selectedIndex].value;
}

/**
 * 设置下拉菜单的选择状态到指定的值.
 * @param {下拉菜单对象} obj
 * @param {要选择的值} value
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
 * 根据键值串的内容进行下拉菜单的动态组装
 * @param {要进行下拉菜单组装的dom对象} obj
 * @param {键值对用,和;分割,例如'1,男;2,女;3,未知'} valAndText
 */
function setSelectContent(obj,valAndText){
        if(trim(valAndText)==''){
                alert('没有要进行组装下拉菜单的数据!');
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
 * 清空下拉菜单里面的内容.
 * @param {下拉菜单对象} obj
 */
function clearSelect(obj) {
    for (var i=obj.options.length; i >0; i--) {
        obj.remove(0);
    }
} 

/*************** 以下方法和多选框相关*************************************************/
/**
 * 返回选中的checks的id组成的字符串,逗号隔开.
 * @param {checks数组} checks
 * @return 选择的id组成的字符串
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
 * 表单验证的示例js方法.
 */
function check(){
        if(checkIfEmpty('a','非空校验')
                &&checkIsMail('b','邮箱校验')
                &&checkIsNum('c','数字校验')
                &&checkIsValid('d','合法性校验')
                &&compareTwoDate('e','f','小日期与大日期关系错误!')
                &&checkLength('g',5,'长度校验')
                &&checkChooseSelect('h','下拉菜单非空','-1')
                &&compareTwoNum('k','l','大小数目关系不正确!')){
                alert('校验通过!');
                return true;
        }else{
                return false;
        }
}

/**
 * 取下拉菜单的值和文本的示例js方法.
 */
function getSelect(){
        var sss = $('h');
        alert('下拉菜单选择的文本是:'+getSelectText(sss)+'\n'
                        +'下拉菜单选择的值是:'+getSelectValue(sss));
}

/**
 * 根据键值字符串设置下拉菜单的显示内容.
 */
function setSelect(){
        var sss = $('i').value;
        setSelectContent($('h'),sss);
}

/**
 * 返回多选框数组选择状态的id的字符串,结果以逗号隔开.
 */
function getMulti(){
        alert('多选选择的id是:'+getCheckedIds(document.getElementsByName('j')));
}
//-->
</SCRIPT>
        <BODY>
                <table>
                        <tr>
                                <td>
                                        非空:
                                        <input id='a'>
                                </td>
                                <td>
                                        checkIfEmpty('a','非空校验')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        邮箱:
                                        <input id='b' value='323232@2323.com'>
                                </td>
                                <td>
                                        checkIsMail('b','邮箱校验')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        数字:
                                        <input id='c' value='aaaa'>
                                </td>
                                <td>
                                        checkIsNum('c','数字校验')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        合法字符:
                                        <input id='d' value='@$@$#$#!%%#'>
                                </td>
                                <td>
                                        checkIsValid('d','合法性校验')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        小的日期:
                                        <input id='e' value='2010-1-1'>
                                        大的日期:
                                        <input id='f' value='2011-1-1'>
                                </td>
                                <td>
                                        compareTwoDate('e','f','小日期与大日期关系错误!')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        小的数:
                                        <input id='k' value='12.3'>
                                        大的数:
                                        <input id='l' value='4564'>
                                </td>
                                <td>
                                        compareTwoNum('k','l','大小数目关系不正确!')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        字符长度校验(<5):
                                        <input id='g'>
                                </td>
                                <td>
                                        checkLength('g',5,'长度校验')
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        下拉菜单非空校验:
                                        <select id='h'>
                                                <option value='-1'>
                                                        请选择
                                                </option>
                                                <option value='1'>
                                                        立项
                                                </option>
                                                <option value='2'>
                                                        可研
                                                </option>
                                        </select>
                                </td>
                                <td>
                                        checkChooseSelect('h','下拉菜单非空','-1')
                                </td>
                        </tr>
                        <tr>
                                <td colspan='2'>
                                        <button onclick='check()'>
                                                测试表单校验方法
                                        </button>
                                </td>
                        </tr>
                        <tr>
                                <td>

                                        <button onclick='getSelect()'>
                                                得到下拉菜单的值
                                        </button>
                                </td>
                                <td>
                                        getSelectText(sss)和getSelectValue(sss)
                                </td>
                        </tr>
                        <tr>
                                <td>
                                        输入下拉菜单的键值字符串(如右所示)
                                        <input id='i' value='1,男;2,女;3,未知'>
                                        <button onclick='setSelect()'>
                                                设置下拉菜单的值
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
                                                得到多选选择的id
                                        </button>
                                </td>
                                <td>
                                        getCheckedIds(document.getElementsByName('j'))
                                </td>
                        </tr>
                </table>
        </BODY>
</HTML>