'use strict';

angular.module('resumeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'sticky',
  'smoothScroll',
  'angular-inview',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
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
