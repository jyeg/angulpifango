/*jslint node: true */
'use strict';

module.exports = /* @ngInject */
function Routes($stateProvider, $urlRouterProvider, $locationProvider) {
    if(window.history && history.pushState) {
        $locationProvider.html5Mode(true);
    }

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "home.html"
        });

    // For any unmatched url
    $urlRouterProvider.otherwise("/");
};
