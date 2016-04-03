'use strict';

angular.module('resumeApp').directive('jsPreloader', function () {
  return {
    restrict: 'A',
    link: function postLink() {
      angular.element('body').jpreLoader({
        showPercentage: false,
        loaderVPos: '50%'
      });
    }
  };
});
