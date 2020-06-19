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



3. 环境变量的配置使用
   1. cli默认支持的.env.development, .env.production, .env.test 三种模式，当然都是可以扩展的，.evn.xxx
   2. 这些环境文件的内配置自定义的变量必须以VUE_APP开头才可以，除了内置的NODE_ENV
   3. 在启动，打包时加载配置文件通过package.json里配置运行脚本 --mode xxx(取配置文件名，例如)
   4. 开发环境，默认会加载.env.development这个环境文件
   5. 配置的环境变量在js中的使用通过process.env.VUE_APP_BASEURL 方式来访问
   

4. 权限控制-路由控制（菜单级别）
> 路由的权限控制，主要由后端给定接口，前端根据接口返回值动态添加路由配置，生成前端的路由信息（菜单级别的权限控制）
   1. 用户登录，接口返回用户的角色信息和菜单路由表
   2. 前端vuex存储用户信息，动态生成路由 addRoutes()








