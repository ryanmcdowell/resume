'use strict';

angular.module('resumeApp').controller('MainCtrl', function ($scope, $window) {

    /****************** Scope Functions **********************/

    /**
     * Expands the resume boxes when the window size
     * is less than 767 (e.g. the site is being displayed
     * as a mobile version).
     *
     * @param  {Integer} newSize    The new size of the window.
     */
    $scope.changeWindowSize = function (newSize) {

      if (newSize <= 767) {
        $scope.showWork1 = true;
        $scope.showWork2 = true;
        $scope.showWork3 = true;
      }
    };

    /****************** Initialization **********************/

    // Bind an event listener so the change function is invoked
    // whenever the window is resized.
    angular.element($window).bind('resize', function () {
      $scope.changeWindowSize($window.innerWidth);
    });

    // Invoke the changeWindowSize once on load so the
    // page displays in the correct format.
    $scope.changeWindowSize($window.innerWidth);

  });
