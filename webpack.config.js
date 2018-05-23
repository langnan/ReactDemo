const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');//分离css

module.exports = {
	mode: 'development',
	devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: './dist',//设置目录
		// hot: true,
		inline: true,
		// historyApiFallback: true,
		publicPath: "/"// Both publicPath options should be the same as what is in your html
	},
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				// test 表示测试什么文件类型
				test: /\.css$/,
				// 使用 'style-loader','css-loader'
				use: ['css-loader', 'style-loader']
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
								localIdentName: 'cssm-[name]_[local]_[hash:base64:5]',
							}
						},
						'less-loader'
					]
				}),
				exclude: /node_modules/
				// use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.html$/,
				// use: ['style-loader', 'css-loader', 'less-loader']
				use: ['html-loader']
			},
			// {
			//   test: /\.(sass|scss)$/,
			//   use: ExtractTextPlugin.extract({
			//     fallback: 'style-loader',
			//     //resolve-url-loader may be chained before sass-loader if necessary
			//     use: ['css-loader', 'sass-loader']
			//   })
			// },
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: { // 这里的options选项参数可以定义多大的图片转换为base64
						limit: 50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
						outputPath: 'images' //定义输出的图片文件夹
					}
				}]
			}
		]
	},
	plugins: [

		// new webpack.optimize.UglifyJsPlugin(),
		// new HtmlWebpackPlugin(
		//   {
		//     template:'./dist/index.html',

		//   }
		// ),
		//Node.js API方式需要做两个配置：启用热加载
		//把hot:true加入到webpack-dev-server的配置项(devServer)里面。
		// new webpack.HotModuleReplacementPlugin({
		//   // Options...
		// })
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'Home'
		}),
		new ExtractTextPlugin('./css/[name].css')
	]
};