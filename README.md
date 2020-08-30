# vue2.x组件化


## 组件化的实践

### 组件的通信

1. props
2. $emit , $on
3. eventBus
4. vuex
5. $parent/$root ( $parent是直接的父组件， $root是组件树的根组件 )
   1. $parent的使用会有耦合的出现
   2. $chilren是获取直接的子组件
6. $attrs/$listeners
   1. 非props的属性传递获取 $attrs,不包含 class, style
   2. 

7. $refs
   1. 可以引用 原生html节点，或者是自定义的组件
   
8. provide/inject
   1. 扩层级的组件传值
   

### 组件复合
1. 内容分发，插槽
2. 



### 社区UI库-elementUI的实践

### form组件设计

> 高内聚，低耦合

1. 最外层的表单, 维护表单的数据，校验方法
2. formitem 包装组件中间层，抽象lable,error校验
3. input 组件的-交互数据



