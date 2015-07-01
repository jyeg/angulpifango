/*jslint node: true */
/*global alert:false */
'use strict';

var urlPkg = require('url');

module.exports = /* @ngInject */
function MockBackend($httpBackend) {
    // allow partials and calls to real api to pass through
    $httpBackend.whenGET(/^partials/).passThrough();
    $httpBackend.whenGET(/^\/api/).passThrough();

    // whenGET('/some/endpoint', {some: "data"});
    // whenPOST('/some/endpoing');

    function whenGET(url, response) {
        $httpBackend.whenGET(url).respond(function(method, url) {
            console.log('GET', url);
            return [200, response];
        });
    }
    function whenPOST(url) {
        $httpBackend.whenPOST(url, checkData).respond(function(method, url) {
            console.log('POST to ', url);
            return [200, {}];
        });
    }

    function checkData(str) {
        console.log('POST Data:', str); 
        return true;
    }
};
