const path = require('path');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const assetPrefix = process.env.NODE_ENV.trim() === 'production' ? '/h-blog-ssr' : '';
console.log('assetPrefix = ', process.env.NODE_ENV, assetPrefix);


module.exports = withSass(withCss({
    assetPrefix,
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