// vue.config.js
module.exports = {
    runtimeCompiler: true,
    devServer: {
        port:8027,
        // proxy: 'http://localhost:8027'
    },
    chainWebpack: config => {
        config.devServer.disableHostCheck(true)
    },
}
