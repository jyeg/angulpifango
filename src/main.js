var GLOBALS = GLOBALS || {};
var angular = require('angular');
require('angular-ui-router');
require('angular-bootstrap-npm');
require('angular-animate');
require('angular-sanitize');
require('angular-cookies');
require('angular-mocks');

window.app = angular.module('MyApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    require('./modules/config').name,
    require('./modules/services').name,
    require('./modules/controllers').name,
    require('./modules/directives').name,
    require('./modules/partials').name
    ])
    .run(function($rootScope, $http, $cookies) {
        $rootScope.GLOBALS = GLOBALS;
    });

// only mock the backend if app is set to debug
if(GLOBALS.DEBUG) {
    angular.module('Mockery', ['ngMockE2E'])
        .run( require('./modules/server/MockBackend') );
    app.requires.push('Mockery');
}
