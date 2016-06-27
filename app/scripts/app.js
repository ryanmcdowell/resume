'use strict';

angular.module('resume', [
  'resume.config',
  'ngAnimate',
  'ngRoute',
  'sticky',
  'smoothScroll',
  'angular-inview',
  'ui.bootstrap',
  'base64'
])
  .config(function ($routeProvider, $compileProvider, Config) {
    // Disable debug information when in production to
    // speed up the app's performance.
    if (Config.environment === 'Production') {
      $compileProvider.debugInfoEnabled(false);
    }

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  });
