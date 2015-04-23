'use strict';

module.exports = /*@ngInject*/
function GlobalsService($rootScope) {
    $rootScope.GLOBALS = GLOBALS;
    return GLOBALS;
}
