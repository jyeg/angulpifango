/* global angular */

'use strict';

describe('AppCtrl', function() {
  beforeEach(module('MyApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('controller is a thing', function() {
    it('works as expected', function() {
      var $scope = {};
      var controller = $controller('AppCtrl', { $scope: $scope });
      $scope.page = {welcome: 'something'};
      expect($scope.getMessage()).toBe('something');
      $scope.resetMessage();
      expect($scope.getMessage()).toBe(false);
    });
  });
});