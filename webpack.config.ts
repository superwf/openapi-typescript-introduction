import * as path from 'path'
import { join } from 'path'

import * as rimraf from 'rimraf'
import { Configuration, DefinePlugin } from 'webpack'

import { cdn } from './cdn'

import CopyWebpackPlugin = require('copy-webpack-plugin')

import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
import CompressionPlugin = require('compression-webpack-plugin')

type TNodeEnv = 'production' | 'development'

const NODE_ENV: TNodeEnv = (process.env.NODE_ENV as TNodeEnv) || 'development'
const isProd = NODE_ENV === 'production'

const styleLoader = {
  loader: 'style-loader',
  // options: {
  //   sourceMap: true,
  // },
}

const resolveRoot = (relativePath: string) => path.resolve(__dirname, relativePath)

// eslint-disable-next-line import/no-mutable-exports
export default async () => {
  const config: Configuration = {
    // context: __dirname,
    entry: {
      main: [resolveRoot('src/index.tsx')],
    },
    output: {
      path: resolveRoot('dist'),
      publicPath: isProd ? '/openapi-typescript-introduction' : '/',
      filename: 'static/[name].js',
      chunkFilename: 'static/[name]-chunk-[chunkhash:5].js',
    },
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      inline: true,
      hot: true,
      disableHostCheck: true,
      port: 4010,
      contentBase: './public',
      https: false,
      open: true,
      openPage: 'http://localhost:4010',
    },
    externals: cdn.externals,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.es', '.es6', '.mjs', '.css', '.less'],
    },
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          include: [resolveRoot('src')],
          loader: 'babel-loader',
          options: {
            // customize: require.resolve('babel-preset-react-app/webpack-overrides'),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: isProd,
          },
        },
        // Process any JS outside of the app with Babel.
        // Unlike the application JS, we only compile the standard ES features.
        // {
        //   test: /\.(js|mjs)$/,
        //   exclude: /@babel(?:\/|\\{1,2})runtime/,
        //   loader: 'babel-loader',
        //   options: {
        //     babelrc: false,
        //     configFile: false,
        //     compact: false,
        //     presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
        //     cacheDirectory: true,
        //     // See #6846 for context on why cacheCompression is disabled
        //     cacheCompression: false,

        //     // Babel sourcemaps are needed for debugging into node_modules
        //     // code.  Without the options below, debuggers like VSCode
        //     // show incorrect code and set breakpoints on the wrong lines.
        //     sourceMaps: true,
        //     inputSourceMap: true,
        //   },
        // },
        {
          test: /\.css$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          exclude: [/\.module\.css/],
        },
        {
          test: /\.module\.css$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          exclude: /\.module\.less$/,
          use: [
            styleLoader,
            {
              loader: require.resolve('css-loader'),
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          sideEffects: true,
        },
        {
          test: /\.module\.less$/,
          use: [
            styleLoader,
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          include: [resolveRoot('src')],
        },

        {
          test: /\.(jpe?g|png|gif|ico)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '/images/[hash:8][name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
          // exclude: [
          //   require.resolve('antd-mobile').replace(/warn\.js$/, ''),
          //   path.resolve(__dirname, 'src/images'),
          // ],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '/fonts/[name].[hash:8].[ext]',
          },
        },
      ],
    },
    plugins: [],
    devtool: 'cheap-module-eval-source-map',
  }

  config.plugins = [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      assetsPath: isProd ? '/openapi-typescript-introduction/static' : '',
      cdn: cdn
        ? cdn.files[NODE_ENV as 'development' | 'production']
            .map((src: string) => `<script rel="preload" src="${cdn.host}${src}"></script>`)
            .join('')
        : '',
      extra: cdn ? cdn.extra : '',
    }),
    // new ResourceHintWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: `"${NODE_ENV}"`,
      },
    }),
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    // new MiniCssExtractPlugin({
    //   filename: 'asset/[name].[hash:8].css',
    //   chunkFilename: 'asset/[name].[hash:8].css',
    // }),
  ]

  if (isProd) {
    rimraf.sync('./static/*')
    config.devtool = false
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: './public/asset',
          to: join(__dirname, '/dist/asset'),
        },
        {
          from: './public/manifest.json',
          to: join(__dirname, '/dist'),
        },
        {
          from: './public/impress.js',
          to: join(__dirname, '/dist/static'),
        },
        {
          from: './public/impress-common.css',
          to: join(__dirname, '/dist/static'),
        },
      ]),
    )
  } else {
    config.plugins.push(
      new ForkTsCheckerWebpackPlugin({
        async: !isProd,
      }),
    )
  }
  return config
}
