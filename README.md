# vue 项目最佳实践


## 目标
* 代码规范
* 项目配置
* 权限
* 导航
* 数据mock
* 环境变量
* 测试
* 优化、告警、发布和部署




### 项目配置策略

1. 基础配置，执行应用的上下文，端口



2. icon图标的配置
    1. svg-sprite-loader来处理所有的svg图标资源，其实就是将svg整体加入到html文档中一一建立symbol(id=)
    2. 之后的引用通过svg标签，传入id名称引用
    3. webpack的批量导入 require.context




