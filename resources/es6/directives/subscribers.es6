import template from '../../html/directives/subscribers.html';

export default /** @ngInject */  function() {
    return {
        scope: {
            items: '=',
            edit: '@'
        },
        template: template,
        replace: true,
        controller: /** @ngInject */ function($rootScope, $scope) {
            $scope.isLoaded = !!$scope.items;

            $scope.$watch('items', (newValue, oldValue) => {
                if (typeof newValue !== 'undefined' && newValue !== oldValue) {
                    $scope.isLoaded = !!$scope.items;
                }
            })
        }
    }
}
