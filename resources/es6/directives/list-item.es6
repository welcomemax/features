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
        link: (scope) => {
            const product_alias = scope.item.product ? scope.item.product.alias : scope.item.alias;
            const getParts = (show) => {
                if (!show) {
                    return {};
                }

                const show_arr = show.split(',');
                const parts = {};
                
                show_arr.forEach(element => {
                    element = element.trim();
                    let value = element.substring(0, 1) !== '!';
                    let key = !value ? element.substring(1, element.length) : element;

                    parts[key] = value;
                });

                return parts;
            }

            scope.parts = getParts(scope.show);
            if (product_alias) {
                scope.icon = `/img/icons/apps/${product_alias}.svg`;
            }  
        },
        controller: ($scope) => {
            
        }
    };
}