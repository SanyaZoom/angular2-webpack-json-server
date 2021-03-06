'use strict';
var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            './config/karma-test-shim.js',
            './node_modules/@angular/material/prebuilt-themes/indigo-pink.css'
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};

