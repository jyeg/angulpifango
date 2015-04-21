'use strict';

module.exports = /*@ngInject*/
function AppCtrl($scope, FooService) {
    $scope.page = {
        welcome: 'This is a basic app'
    };

    FooService.getFoos()
        .then(function(response) {
            console.log('worked!', response);
        });
}
