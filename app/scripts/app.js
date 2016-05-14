'use strict';

angular.module('resumeApp', [
  'ngAnimate',
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
