function stack(){
      if(this.top==undefined){
      //初始化堆栈的顶部指针和数据存放域
            this.top=0;
            this.unit=new Array();
      }
      this.push=function(pushvalue){
      //定义压入堆栈的方法
            this.unit[this.top]=pushvalue;
            this.top+=1;
      }
      this.readAllElements=function(){
      //定义读取所有数据的方法
            if(this.top==0){
                  alert("当前栈空，无法读取数据");
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
      //定义弹出堆栈的方法
            if(this.top==0){
                  alert("当前栈空，无法弹出数据");
                  return("");
            }
            var      popTo=this.unit[this.top-1];
            this.top--;
            return(popTo);
            /* 从堆栈弹出数据，顶部指针减一，不过这里没有做到资源的释放，也
            就是说数据仍然存在于this.unit的数组中，只不过无法访问罢了。目前
            我也没想到好的办法解决。*/
      }
}