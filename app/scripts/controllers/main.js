'use strict';

angular.module('resumeApp').controller('MainCtrl', function ($scope) {

	$scope.currentYear = new Date().getFullYear();
});
