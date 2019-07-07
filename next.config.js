const path = require('path');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');


module.exports = withSass(withCss({
    webpack: (config) => {
        // FILE LOADER
        config.module.rules.push({
            test: /\.(png|woff|woff2|jpg|jpeg|svg|gif|eot|ttf)$/,
            loader: 'url-loader'
        });

        // ALIAS
        config.resolve.alias['@/components'] = path.resolve('./components');

        return config;
    }
}));