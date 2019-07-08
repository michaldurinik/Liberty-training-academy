// Karma configuration
const path = require("path");

module.exports = function (config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [
            '**/*.js'
        ],
        exclude: [],

        preprocessors: {
            '**/*.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: path.resolve(__dirname, 'node_modules'),
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader',
                    },
                ]
            },
        },

        webpackServer: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['kjhtml'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome', 'IE'],
        singleRun: false,
        concurrency: Infinity
    })
}
