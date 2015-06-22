'use strict';
/* global angular */

module.exports =
  angular.module('app.modules.directives', [])
    .directive('customDirective', require('./CustomDirective'));
