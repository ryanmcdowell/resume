// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/angular-inview/angular-inview.js',
      'app/bower_components/ngSmoothScroll/lib/angular-smooth-scroll.js',
      'app/bower_components/matchmedia/matchMedia.js',
      'app/bower_components/ngSticky/lib/sticky.js',
      'app/bower_components/angular-base64/angular-base64.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Code coverage report
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
