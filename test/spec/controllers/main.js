'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeApp'));

  var MainCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  // Test that the current year is returned from the
  // controller for the copyright.
  it('should return the current year', function () {
    expect(scope.currentYear).toBe(new Date().getFullYear());
  });

  // Test that the email address is properly decoded
  // from the base64 value.
  it('should return the decoded email', function () {
    expect(scope.getEmail()).toBe('me@ryanmcdowell.io');
  });

  // Test that the phone number is properly decoded
  // from the base64 value.
  it('should return the decoded phone number', function () {
    expect(scope.getPhoneNumber()).toBe('(630) 418-2121');
  });

  // Test that the expand all resume items is true when the
  // window size changes to <= 767.
  it('should expand all resume items when the window width <= 767', function () {
    scope.changeWindowSize(300);
    expect(scope.expandAllResumeItems).toBe(true);

    scope.changeWindowSize(767);
    expect(scope.expandAllResumeItems).toBe(true);

    scope.changeWindowSize(768);
    expect(scope.expandAllResumeItems).toBe(false);

    scope.changeWindowSize(1000);
    expect(scope.expandAllResumeItems).toBe(false);
  });

  // Test that the collapseResumeItem method defaults to
  // false regardless of input if the window size is <= 767.
  it('should not collapse resume items when the window size is <=767', function () {
    scope.changeWindowSize(300);
    expect(scope.collapseResumeItem(true)).toBe(false);

    scope.changeWindowSize(767);
    expect(scope.collapseResumeItem(false)).toBe(false);

    scope.changeWindowSize(768);
    expect(scope.collapseResumeItem(true)).toBe(false);

    scope.changeWindowSize(1000);
    expect(scope.collapseResumeItem(false)).toBe(true);
  });
});
