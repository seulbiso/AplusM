const config = require('./config.json');
const package = require('./package.json');

const autoprefixer = require('autoprefixer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const RtlCssPlugin = require('rtl-css-transform-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const paths = {
    src: {
        js: './src/js',
        scss: './src/scss',
        html: './src/html',
        partials: './src/partials',
        images: './src/images',
        favicon: './src/favicon'
    },
    dist: {
        js: './assets/js',
        css: './assets/css',
        images: './assets/images',
        favicon: './assets/favicon'
    }
};

module.exports = (env, argv) => {
    return {
        mode: 'development',
        target: 'web',
        devtool: argv.mode == 'production' ? false : 'source-map',
        devServer: {
            watchFiles: [paths.src.html + '/**/*.{html,hbs}', paths.src.partials + '/**/*.{html,hbs}'],
            hot: true
        },
        entry: {
            theme: [
                ...(config.demoMode ? [paths.src.js + '/demo.js'] : []),
                ...[paths.src.js + '/theme.js', paths.src.scss + '/theme.scss']
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(sass|scss)$/,
                    include: path.resolve(__dirname, paths.src.scss.slice(2)),
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['autoprefixer']]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    loader: 'css-loader',
                    options: {
                        import: false
                    },
                },
                { 
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {
                        from: paths.src.images,
                        to: paths.dist.images,
                        noErrorOnMissing: true
                    },
                    {
                        from: paths.src.favicon,
                        to: paths.dist.favicon,
                        noErrorOnMissing: true
                    }
                ]
            }),
            new HandlebarsPlugin({
                entry: path.join(process.cwd(), 'src', 'html', '**', '*.{html,hbs}'),
                partials: [path.join(process.cwd(), 'src', 'partials', '**', '*.{html,hbs}')],
                helpers: {
                    rootPath: function () {
                        return '{{rootPath}}';
                    },
                    currentYear: function () {
                        return new Date().getFullYear();
                    },
                    versionNumber: function () {
                        return 'v' + package.version;
                    },
                    json: function(obj) {
                        return JSON.stringify(obj);
                    },
                    eq: (v1, v2) => v1 === v2,
                    ne: (v1, v2) => v1 !== v2,
                    lt: (v1, v2) => v1 < v2,
                    gt: (v1, v2) => v1 > v2,
                    lte: (v1, v2) => v1 <= v2,
                    gte: (v1, v2) => v1 >= v2,
                    and() {
                        return Array.prototype.every.call(arguments, Boolean);
                    },
                    or() {
                        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
                    }
                },
                data: config,
                onBeforeSave: function (Handlebars, resultHtml, filename) {
                    const level = filename.split('//').pop().split('/').length;
                    const finalHtml = resultHtml.split('{{rootPath}}').join('.'.repeat(level));

                    return finalHtml;
                },
                output: path.join(process.cwd(), 'dist', '[path]', '[name].html'),
            }),
            new MiniCssExtractPlugin({
                filename: paths.dist.css + '/[name].bundle.css'
            }),
            new RtlCssPlugin({
                filename: paths.dist.css + '/[name].rtl.bundle.css'
            }),
            new RemoveEmptyScriptsPlugin()
        ],
        optimization: {
            splitChunks: false,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        }
                    },
                    extractComments: false
                })
            ]
        },
        output: {
            filename: paths.dist.js + '/[name].bundle.js'
        }
    }
};