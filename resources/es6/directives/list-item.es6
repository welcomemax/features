import template from '../../html/directives/list-item.html';

export default /** @ngInject */ function itemDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: template,
        scope: {
            item: '=',
            type: '=',
            show: '=',
            detail: '='
        },
        controller: ($scope) => {
            let getParts = (show) => {
                if (!show) {
                    return {};
                }

                let show_arr = show.split(',');
                let parts = {};
                
                show_arr.forEach(element => {
                    element = element.trim();
                    let value = element.substring(0, 1) !== '!';
                    let key = !value ? element.substring(1, element.length) : element;

                    parts[key] = value;
                });

                return parts;
            }

            $scope.parts = getParts($scope.show);

            $scope.item.tags = [$scope.item.type, $scope.item.product];
        }
    };
}