/**
 * Created by apple on 2017/7/28.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor:[
            'lodash'
        ]
       // print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //清除之前打的包
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HashedModuleIdsPlugin(), //模块标识符，修改本地依赖，vendor hash 保持不变
        new webpack.optimize.CommonsChunkPlugin({  //将第三方库单独提取到vendor文件中
           name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        }),
      //  new webpack.optimize.env.NODE_ENV === 'production' //在开发和生产构建之间，消除 webpack.config.js 的差异

       /* new webpack.optimize.CommonsChunkPlugin({  //Prevent Duplication,代码优化，提取公共的部分
            name:'common'
        })*/

    ],
    output: {
        //filename: '[name].bundle.js',  //代码分离，将模块分离到单独的文件
        filename:'[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename:'[name].bundle.js'  //缓存，生成hash值，内容变化时生成新的hash
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
