/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


// ������ animal
function animal(bSex){
    this.sex = bSex
    this.getSex = function(){
        return this.sex
    }
}
// �ྲ̬���� (����㲻�޸����Ļ�����)
animal.SEX_G = new Object();    // ����
animal.SEX_B = new Object();    // ����
// �������� ��
function bird(bSex){
    animal.call(this, bSex);
    this.fly = function(iSpeed){
        alert("����ʱ�ٸߴ� " + iSpeed);
    }
}
// �������� ��
function fish(bSex){
    animal.call(this, bSex);
    this.swim = function(iSpeed){
        alert("�ζ�ʱ�ٸߴ� " + iSpeed)
    }
}
// �� �� �ӽ�Ʒ�֡�����
function crossBF(bSex){
    bird.call(this, bSex);
    fish.call(this, bSex);
}
var oPet = new crossBF(animal.SEX_G);    // ���� ����
    alert(oPet.getSex() == animal.SEX_G ? "����" : "����");
    oPet.fly(124)
    oPet.swim(254)
    
    //���������ı�̷�ʽдJavaScript:
    MyTool = new function(){
        /**
         * ���طǿ��ַ���,�����Ĭ��ֵ�ͷ���Ĭ���ַ���.
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