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
  .config(function ($routeProvider, $locationProvider, $compileProvider, Config) {
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

    // Use the HTML5 History API. This removes the hash tag from the URL
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
