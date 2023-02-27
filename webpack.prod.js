const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const path = require('path');
const glob = require('glob-all');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // clean: true,
  },
  plugins: [
    new CompressionPlugin(),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, './dist/docs/*.html'),
        path.join(__dirname, './src/app/common/vue/*.vue'),
        path.join(__dirname, './src/app/common/vue/**/*.vue'),
        path.join(__dirname, './src/pug/docs/*.pug'),
      ]),
      safelist: [
        /:where*/,
        /data-v-.*/,
        /swiper-button-.*/,
        /swiper-pagination-.*/,
        /v-ripple.*/,
        '.js',
        '.no-js',
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
        },
      }),
    ],
    usedExports: true,
    splitChunks: {},
  },
});
