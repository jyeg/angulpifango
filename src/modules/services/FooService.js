'use strict';

module.exports = /*@ngInject*/
function FooService($http, $q) {
    this.getFoos = function() {
        return $q.when({
            success: true
        });
    };
}
