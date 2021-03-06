// Karma configuration
// Generated on Fri Aug 05 2016 15:01:10 GMT+0200 (Vest-Europa (sommertid))
var path = require('path');

module.exports = function(config) {
  var configuration =
  {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, "tests"),
              path.resolve(__dirname, "src/scripts")
            ],
            loader: 'babel'
          },
          {
            test: /\.css$/,
            include: [
              path.resolve(__dirname, "src/scripts")
            ],
            loader: "style!css"
          }
        ]
      },
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  };


  if(process.env.TRAVIS){
    configuration.customLaunchers = {
      Chrome_travis_ci: {
        base: 'Chrome',
          flags: ['--no-sandbox']
      }
    };

    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
};
