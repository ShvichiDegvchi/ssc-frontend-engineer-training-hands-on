const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    'common/js/bundle': './src/index.js',
  },
  output: {
    filename: '[name].min.js',
    chunkFilename: `common/js/chunks/[name].min.js`,
    publicPath: '/',
    path: path.resolve(__dirname, 'dist/docs'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              hotReload: true,
            },
          },
        ],
      }, {
        test: /\.(sc|c|sa)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              importLoaders: 2,
            },
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sourceMap: process.env.NODE_ENV === 'development' ? true : false,
              sassOptions: {
                /**
                 * @description Windows で fibers を install するために、いろいろ設定が複雑（Python の install など）であるため
                 *              fibers は install しない。package.json からも消しておく。
                 * @link https://zenn.dev/badpingpong/articles/ba59bf557406fd
                 */
                // fiber: require('fibers'),
              },
            },
          },
        ],
      }, {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'common/img',
          name: '[name].[ext]',
        },
      }, {
        test: /\.(jsx|js)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.scss',
      '.vue',
      '.html',
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src/app'),
      '~pug': path.resolve(__dirname, 'src/pug'),
      '~docs': path.resolve(__dirname, 'dist/docs'),
    },
  },
  optimization: {},
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      https: true,
      open: 'external',
      port: 3000,
      notify: true,
      online: true,
      watchTask: true,
      logPrefix: '鈴与シンワート㍿ Frontend Env.',
      server: {
        baseDir: './dist/docs',
        directory: true,
      },
      files: [
        './dist/docs/*.html',
        './dist/docs/**/*.html',
        './dist/docs/**/**/*.html',
        './dist/docs/common/js/*.js',
      ],
    }),
    new StylelintPlugin({
      files: [
        '**/*.vue',
        '**/*.scss',
      ],
    }),
    new ESLintPlugin({
      extensions: [
        '.js',
        '.ts',
        '.vue',
      ],
      exclude: [
        'dist',
        'node_modules',
      ],
    }),
    new VueLoaderPlugin(),
  ],
};
