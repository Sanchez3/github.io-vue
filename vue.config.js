const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
// module.exports = {
//     chainWebpack: config => {
//         config.resolve.alias
//             .set('@$', resolve('src'))
//     }
// }

module.exports = {
    publicPath: './',
    productionSourceMap: false,
    chainWebpack: config => {
        config
            .module
            .rule("glsl")
            .test(/\.(glsl|frag|vert)$/)
            .use("raw-loader")
            .loader("raw-loader")
            .end();
    }
}