export default /** @ngInject */ function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            size: '@',
            active: '='
        },
        controller: ($scope) => {
            $scope.size = $scope.size || 'big';
        },
        template: `
            <div class="loader loader-{{size}}" ng-class="{ 'loader-visible': !!active }">
                <div class="loader-inner"></div>
            </div>
        `
    };
}