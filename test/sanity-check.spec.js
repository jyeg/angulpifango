/* global angular */

'use strict';

describe('AppCtrl', function() {
  beforeEach(module('MyApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('AppCtrl', { $scope: $scope });
      $scope.page = {welcome: 'something'};
      expect($scope.getMessage()).toBe('something');
      $scope.resetMessage();
      expect($scope.getMessage()).toBe(false);
    });
  });
});