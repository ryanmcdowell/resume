'use strict';

/**
 * The main controller for the App. This controller will
 * monitor window resizes and update the expanded resume
 * items displayed accordingly.
 */
angular.module('resumeApp').controller('MainCtrl', function ($scope, $window, $http, $base64) {

    /****************** Local Variables **********************/

    // The base64 encoded phone and email to the hide values
    // from spam bots. These values will be decoded at runtime by
    // angular.
    var phone = 'KDYzMCkgNDE4LTIxMjE=';
    var email = 'bWVAcnlhbm1jZG93ZWxsLmlv';


    /****************** Scope Variables **********************/

    $scope.resume      = null;
    $scope.currentYear = new Date().getFullYear();


    /****************** Scope Functions **********************/

    /**
     * Gets the decoded phone value for display
     * to the user.
     *
     * @return {String} The phone number.
     */
    $scope.getPhoneNumber = function () {
      return $base64.decode(phone);
    };

    /**
     * Gets the decoded email value for display
     * to the user.
     *
     * @return {String} The email address.
     */
    $scope.getEmail = function () {
      return $base64.decode(email);
    };

    /**
     * Expands the resume boxes when the window size
     * is less than 767 (e.g. the site is being displayed
     * as a mobile version).
     *
     * @param  {Integer} newSize    The new size of the window.
     */
    $scope.changeWindowSize = function (newSize) {

      $scope.expandAllResumeItems = newSize <= 767 ? true : false;
    };

    /**
     * Checks whether or not to collapse resume items based
     * on the current window size and whether or not the expand
     * button has be clicked.
     *
     * @param  {Boolean} showDetail   Whether or not to show detail.
     * @return {Boolean}              True if showDetail is false and
     *                                the window size is less than 767. False,
     *                                otherwise.
     */
    $scope.collapseResumeItem = function (showDetail) {
      if ($scope.expandAllResumeItems) {
        return false;
      }

      return !showDetail;
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

    // Retrieve resume data and populate the associated scope
    // variable.
    $http.get('/data/resume.json').success(function (data) {
      $scope.resume = data;
    });

  });