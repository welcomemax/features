import {controlTextareaDirective} from './controls/textarea.es6';
import {controlInputDirective} from './controls/input.es6';
import {controlSelectDirective} from './controls/select.es6';

/** @ngInject */ function controlDirective($compile) {
    return {
        replace: true,
        scope: {
            control: '@',
            name: '@',
            placeholder: '@',
            ngModel: '=',
            values: '='
        },
        link: function (scope, element, atts) {
            const controlTpl = `<control-${scope.control}></control-${scope.control}>`;

            const setDefaultValue = () => {
                scope.default = scope.default || '';
                return scope.values && scope.values[0] ? scope.values[0].value : scope.default;
            };

            scope.ngModel = scope.ngModel || setDefaultValue();

            element.replaceWith($compile(angular.element(controlTpl))(scope));
        },
        controller: /** @ngInject */ function($scope) {
            $scope.setValue = (value) => $scope.ngModel = value;
        }
    }
}

export {controlDirective, controlTextareaDirective, controlInputDirective, controlSelectDirective};