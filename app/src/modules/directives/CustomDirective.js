'use strict';

module.exports = /*@ngInject*/
function CustomDirective() {
    return {
        template: '<p>{{text}}</p>',
        link: function(scope, element, attrs) {
            scope.text = 'This is a custom directive!';
        }
    }
}
