<?php

/*
 *  iframe �߶�����Ӧ
 * 
 *         ����: 
 *                    iframe�߶�����Ӧ�����iframeʼ�յ���ͬһ���̶��߶ȵ�ҳ�棬����ֱ��д��iframe�߶ȾͿ��ԡ�
 *                    �����iframeҪ�л�ҳ�棬���߱�����ҳ��Ҫ��DOM��̬��������ʱ�򣬾���Ҫ����ȥͬ��iframe�߶Ⱥͱ�����ҳ��ʵ�ʸ߶ȡ� 
 * 
 *         �������: 
 * 
 *                    ����һ����ÿ��������ҳ�ڱ������ݼ������֮��ִ��JSȡ�ñ�ҳ��ĸ߶ȣ�Ȼ��ȥͬ����ҳ���iframe�߶ȡ�(�÷�����Ҫÿ��ҳ�涼���js����)
 *                    ������������ҳ��iframe��onload�¼���ִ��JS��ȥȡ�ñ�����ҳ�ĸ߶����ݣ�Ȼ��ȥͬ���߶ȡ�
 *                    ����������������һ��Interval����ͣ������ȡ������ҳ�ĸ߶ȣ�
 * 
 *                    ����һ������ֻ�����˾��Ķ���������ֻ�����ݼ��ص�ʱ��ִ�У����JSȥ����DOM����ĸ߶ȱ仯������̫���㡣
 * 
 *         ����: �����ȷ��ȡҳ��ĸ߶�
 */

?>

<iframe id="frame_content" src="iframe_b.html" scrolling="no" frameborder="0"
 onload="this.height=100"></iframe>

<script type="text/javascript">
           function reinitIframe(){
                      var iframe = document.getElementById("frame_content");
                      try{
                                 var bHeight = iframe.contentWindow.document.body.scrollHeight;
                                 var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                                 var height = Math.max(bHeight, dHeight);
                                 iframe.height =  height;
                      }catch (ex){}
           }
           window.setInterval("reinitIframe()", 200);
</script>