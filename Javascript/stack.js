function stack(){
      if(this.top==undefined){
      //��ʼ����ջ�Ķ���ָ������ݴ����
            this.top=0;
            this.unit=new Array();
      }
      this.push=function(pushvalue){
      //����ѹ���ջ�ķ���
            this.unit[this.top]=pushvalue;
            this.top+=1;
      }
      this.readAllElements=function(){
      //�����ȡ�������ݵķ���
            if(this.top==0){
                  alert("��ǰջ�գ��޷���ȡ����");
                  return("");
            }
            var count=0;
            var outStr="";

            for(count=0;count<this.top;count++){
                  outStr+=this.unit[count]+",";
            }
            return(outStr);
      }
      this.pop=function(){
      //���嵯����ջ�ķ���
            if(this.top==0){
                  alert("��ǰջ�գ��޷���������");
                  return("");
            }
            var      popTo=this.unit[this.top-1];
            this.top--;
            return(popTo);
            /* �Ӷ�ջ�������ݣ�����ָ���һ����������û��������Դ���ͷţ�Ҳ
            ����˵������Ȼ������this.unit�������У�ֻ�����޷����ʰ��ˡ�Ŀǰ
            ��Ҳû�뵽�õİ취�����*/
      }
}