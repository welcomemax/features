export default /** @ngInject */ function ($rootScope, $scope, $routeParams, $filter) {
    const section = $routeParams.section;
    
    $scope.productsWithFeatures = $filter('filter')($rootScope.products, {features_count: '!0'});
    $scope.productsWithReleases = $filter('filter')($rootScope.products, {releases_count: '!0'});
    $scope.typesWithFeatures = $filter('filter')($rootScope.types, {features_count: '!0'});
}
