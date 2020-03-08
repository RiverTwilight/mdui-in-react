var path = require('path')

// 导入在内存中自动生成index页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './test/index.html'),
    filename: 'index.html' // 生成的内存中首页的名称
});

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules:[
            { test:/\.js|jsx$/, use: ['babel-loader'], exclude: /node_modules/ }
        ]
    }
}