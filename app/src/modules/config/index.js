'use strict';

module.exports = /*@ngInject*/
  angular.module('app.modules.configs', [])
    .config(require('./Routes'))
    .config(require('./Headers'));