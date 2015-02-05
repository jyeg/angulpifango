require('angular');
require('angular-ui-router');
require('angular-bootstrap-npm');
require('angular-animate');
require('angular-sanitize');
require('angular-cookies');
require('angular-mocks');

var AppCtrl         = require('./main/controllers/AppCtrl'),
    Routes          = require('./main/config/Routes'),
    MockBackend     = require('./server/MockBackend');

var app = angular.module('MyApp', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'ngCookies', 'ngMockE2E'])
    .run(MockBackend)
    .run(function($rootScope, $http, $cookies) {
        $rootScope.GLOBALS = GLOBALS;
    });

// need to require partials after we have specified the module
require('../../tmp/partials')
    .config(Routes)
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }])
    .controller('AppCtrl', ['$scope', AppCtrl]);
