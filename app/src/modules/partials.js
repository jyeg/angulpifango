module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","<div ng-controller=\"AppCtrl\">\n    <h1>I am a home page</h1>\n    <p>\n        {{page.welcome}}\n    </p>\n    <p>\n        Debug is set to <pre>{{GLOBALS.DEBUG}}</pre>\n    </p>\n    <custom-directive></custom-directive>\n</div>\n");}]);