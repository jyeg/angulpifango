'use strict';
/* global angular */

module.exports =
  angular.module('app.modules.services', [])
    .service('FooService', require('./FooService'))
    .service('GLOBALS', require('./GlobalsService'));