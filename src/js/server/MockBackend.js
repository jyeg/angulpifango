/*jslint node: true */
/*global alert:false */
'use strict';

var urlPkg = require('url');

function MockBackend($httpBackend) {
    // allow partials and calls to real api to pass through
    $httpBackend.whenGET(/^partials/).passThrough();
    $httpBackend.whenGET(/^\/api/).passThrough();
    
    $httpBackend.whenGET(/^\/collection/).respond(function(method, url, data) {
        console.log(urlPkg.parse(url, true));
        return [200, {success: true}, {}];
    });
}

module.exports = MockBackend;
