'use strict';

module.exports =
  angular.module('app.modules.directives', [])
    .directive('customDirective', require('./CustomDirective'));
