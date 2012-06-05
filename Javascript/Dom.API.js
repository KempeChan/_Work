/*
document方法：
getElementById(id) Node 返回指定结点的引用
getElementsByTagName(name) NodeList 返回文档中所有匹配的元素的集合
createElement(name) Node Node
createTextNode(text) Node 创建一个纯文本结点
ownerDocument Document 指向这个节点所属的文档
documentElement Node 返回html节点
document.body Node 返回body节点 

element方法：
getAttribute(attributeName) String 返回指定属性的值
setAttribute(attributeName,value) String 给属性赋值
removeAttribute(attributeName) String 移除指定属性和它的值
getElementsByTagName(name) NodeList 返回结点内所有匹配的元素的集合 

node方法：
appendChild(child) Node 给指定结点添加一个新的子结点
removeChild(child) Node 移除指定结点的子结点
replaceChild(newChild,oldChild) Node 替换指定结点的子结点
insertBefore(newChild,refChild) Node 在同一层级的结点前面插入新结点
hasChildNodes() Boolean 如果结点有子结点则返回true 

node属性：
nodeName String 以字符串的格式存放结点的名称
nodeType String 以整型数据格式存放结点的类型
nodeValue String 以可用的格式存放结点的值
parentNode Node 指向结点的父结点的引用
childNodes NodeList 指向子结点的引用的集合
firstChild Node 指向子结点结合中的第一个子结点的引用
lastChild Node 指向子结点结合中的最后一个子结点的引用
previousSibling Node 指向前一个兄弟节点；如果这个节点就是兄弟节点，那么该值为null
nextSibling Node 指向后一个兄弟节点；如果这个节点就是兄弟节点，那么该值为null 
*/