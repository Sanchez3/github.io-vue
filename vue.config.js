const path = require('path')
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('morphSVG', path.join(__dirname, 'entities/MorphSVGPlugin.js'));
    }
}