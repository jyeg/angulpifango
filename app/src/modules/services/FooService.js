'use strict';

module.exports = /*@ngInject*/
function FooService($http, $q, GLOBALS) {
    this.getFoos = function() {
        return $q.when({
            success: true
        });
    };
}
