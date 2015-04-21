require('angular');
require('angular-ui-router');
require('angular-bootstrap-npm');
require('angular-animate');
require('angular-sanitize');
require('angular-cookies');
require('angular-mocks');

var app = angular.module('MyApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    require('./config').name,
    require('./services').name,
    require('./controllers').name,
    require('./directives').name,
    require('../../tmp/partials').name
    ])
    .run(function($rootScope, $http, $cookies) {
        $rootScope.GLOBALS = GLOBALS;
    });

// only mock the backend if app is set to debug
if(GLOBALS.DEBUG) {
    angular.module('Mockery', ['ngMockE2E'])
        .run( require('./server/MockBackend') );
    app.requires.push('Mockery');
}
