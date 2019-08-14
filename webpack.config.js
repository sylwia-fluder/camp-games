'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
	
	const path = require('path');
	
	module.exports = {
	    mode: 'production',
	
	    entry: {
	        main: path.resolve('./src/js/main.js')
	    },
	
	    output: {
	        filename: '[name].bundle.js',
	        path: path.resolve('./public/dist')
	    },
	
	    module: {
	        rules: [
	        	{
        			test: /\.(png|jpe?g|gif)$/i,
        			use: [
          			{
            		loader: 'file-loader',
         			 },
       				 ],
      				},
      				{
  					test: /\.svg$/,
  					use: "file-loader",
					},
	            {
	                test: /\.js$/,
	                exclude: /node_modules/,
	                use: 'babel-loader'
	            },
	            {
                    test: /\.scss$/,
                    use: [
                      'style-loader', // creates style nodes from JS strings
                      'css-loader', // translates CSS into CommonJS
                      'sass-loader', // compiles Sass to CSS, using Node Sass by default
                    ],
                  },
	        ]
	    },
	    plugins: [
	        new HtmlWebpackPlugin({
	            template: './src/index.html'
	        })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
          }
	
	};