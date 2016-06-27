'use strict';

angular.module('resume').directive('jsPreloader', function () {
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
