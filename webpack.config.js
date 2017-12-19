var path = require("path");
var webpack = require("webpack");  
var HtmlWebpackPlugin  = require("html-webpack-plugin");  
var OpenBrowserWebpackPlguin  =  require("open-browser-webpack-plugin"); 
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin"); 
module.exports = {
    entry:["./src/scripts/index.js"],
    devtool:"source-map",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",   
        publicPath:""   
    },
    module:{   
        rules:[
            {
                test:/\.js[x]?$/,
                use:["babel-loader"],
                exclude:[path.resolve(__dirname,'node_modules')]
            },
            {
                test:/\.(css|less)$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:"style-loader" ,    
                    use:["css-loader",{    
                        loader:"postcss-loader",    
                        options:{
                            plugins:function(){
                                return [
                                    require("cssgrace"), 
                                  
                                    require("autoprefixer")()
                                ]
                            }
                        }
                    },'less-loader']
                })
            },
            {
                test:/\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use:["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
            },
            {test:/\.vue$/,loader:"vue-loader",options:{
				loaders:[
					{"less":"style-loader!css-loader!less-loader"},
					{"css":"stlye-loader!css-loader"}
				]
			}}
        ]
    },
    devServer:{    
        contentBase:path.join(__dirname,"dist"),  
        compress:true,
        hot:true,
        host:"0.0.0.0",
        port:3000,
        publicPath:"/",
        historyApiFallback: true,    
        disableHostCheck: true,
    },

    // 插件
    plugins:[
         new OpenBrowserWebpackPlguin({url:"http://localhost:3000"}),

        new HtmlWebpackPlugin({
            template:"./src/index.html",
            inject:true         // 自动注入   js/css
        }),

        new ExtractTextWebpackPlugin({
            filename:"app.[hash].css",
            allChunks:true,
            disable:false
        }),

        new webpack.HotModuleReplacementPlugin(),

    ],
    resolve: {
		alias: {   //别名
		'vue': 'vue/dist/vue.js'
		}
	},
}