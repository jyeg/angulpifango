'use strict';
/* global angular, GLOBALS */

module.exports = /*@ngInject*/
function GlobalsService($rootScope) {
    $rootScope.GLOBALS = GLOBALS;
    return GLOBALS;
};
