import template from '../../../html/controls/input.html';

export /** @ngInject */ function controlInputDirective() {
    return {
        template: template,
        replace: true,
        link: function (scope) {
            // scope.isDropdown = !!scope.param.values && !!scope.param.values.length;
        },
        controller: /** @ngInject */ function() {

        }
    }
}
