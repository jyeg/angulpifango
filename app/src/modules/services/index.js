'use strict';

module.exports =
  angular.module('app.modules.services', [])
    .service('FooService', require('./FooService'));
