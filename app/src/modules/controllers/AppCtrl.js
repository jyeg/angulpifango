'use strict';

module.exports = /*@ngInject*/
function AppCtrl($scope, FooService, GLOBALS) {
    var message = 'This is a basic app';

    $scope.page = {
        welcome: message
    };
    
    $scope.getMessage = function() {
        return $scope.page.welcome;
    };

    $scope.resetMessage = function() {
        $scope.page.welcome = false;
    }
    FooService.getFoos()
        .then(function(response) {
            console.log('worked!', response);
        });
}
