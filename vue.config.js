


const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}



module.exports = {

    publicPath: '/best-practice', // 项目部署的目录，默认是/

    // 本地开发时web服务配置
    devServer: {
        port: 7070, //端口
        proxy: {
            // 代理 /dev-api/user/login 到 http://127.0.0.1:3000/user/login
            // 本地 代理可以解决 接口请求跨域的问题
            [process.env.VUE_APP_BASE_API]: {
                target: `http://127.0.0.1:3000/`,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        },
    },


    //接受对象，或者一个函数返回对象，该对象会被webpack-merge到最终的配置中
    configureWebpack: {
        name: 'Vue最佳实践', //配置页面title标签内容，可在html模板中使用插值注入
    },


    // svg图标的处理, webpack配置的修改方式 configureWebpack, chainWebpack
    chainWebpack(config) {
        config.module.rule('svg')
            .exclude.add(resolve('./src/icons'))

        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('./src/icons')).end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'icon-[name]' })
    }



}