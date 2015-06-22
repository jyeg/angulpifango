/*jslint node: true */
/*global alert:false */
'use strict';

var urlPkg = require('url');

module.exports = /*@ngInject*/
function MockBackend($httpBackend) {
    // allow partials and calls to real api to pass through
    $httpBackend.whenGET(/^partials/).passThrough();
    $httpBackend.whenGET(/^\/api/).passThrough();
};

