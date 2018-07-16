const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const config = {
        entry: { 'index': './ClientApp/index.ts' },
        output: {
            path: path.resolve(__dirname, 'wwwroot'),
            filename: 'js/[name].bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: []
    };

    if (argv.mode !== 'production') {
        config.devtool = '#eval-source-map'
        config.plugins.push(new webpack.HotModuleReplacementPlugin())
        config.plugins.push(new HtmlWebpackPlugin({
            template: './ClientApp/Index.dev.html',
            filename: 'index.html'
        }))
        config.devServer = {
            host: 'localhost',
            port: 3000,
            hot: true,
            compress: true,
            open: true,
            publicPath: '/',
            proxy: {
                '/': {
                    target: 'http://localhost:55059'
                }
            }
        }
    }

    if (argv.mode === 'production') {
        config.optimization = {
            minimizer: [
                new UglifyJSPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        };
    }

    return config;
};