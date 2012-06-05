/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


// 动物类 animal
function animal(bSex){
    this.sex = bSex
    this.getSex = function(){
        return this.sex
    }
}
// 类静态变量 (如果你不修改它的话～～)
animal.SEX_G = new Object();    // 雌性
animal.SEX_B = new Object();    // 雄性
// 动物子类 鸟
function bird(bSex){
    animal.call(this, bSex);
    this.fly = function(iSpeed){
        alert("飞行时速高达 " + iSpeed);
    }
}
// 动物子类 鱼
function fish(bSex){
    animal.call(this, bSex);
    this.swim = function(iSpeed){
        alert("游动时速高达 " + iSpeed)
    }
}
// 鱼 鸟 杂交品种。。。
function crossBF(bSex){
    bird.call(this, bSex);
    fish.call(this, bSex);
}
var oPet = new crossBF(animal.SEX_G);    // 雌性 鱼鸟
    alert(oPet.getSex() == animal.SEX_G ? "雌性" : "雄性");
    oPet.fly(124)
    oPet.swim(254)
    
    //用面向对象的编程方式写JavaScript:
    MyTool = new function(){
        /**
         * 返回非空字符串,如果有默认值就返回默认字符串.
         */
        this.notNull = function(str,defaultStr){
                if(typeof(str)=="undefined" ||str==null ||str==''){
                        if(defaultStr)
                                return defaultStr;
                        else
                                return '';
                }
                else{
                        return str;
                }
        }
}

rootId = MyTool.notNull(rootId,'001000');  