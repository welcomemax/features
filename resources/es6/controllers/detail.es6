export default /** @ngInject */ function (api, $rootScope, $scope, $routeParams, $filter) {
    const section = $routeParams.section;
    const id = $routeParams.id;
    
    $scope.item = {};

    id && api.call(`${section}/${id}`, 'get').then((response) => {
        $scope.item = response.data[0];
        $scope.item.tags = [$scope.item.product, $scope.item.type];
    });

    if (section === 'apps') {
        $scope.featuresByProduct = $filter('filter')($rootScope.features, {product: {name: $scope.item.name}});
        $scope.releasesByProduct = $filter('filter')($rootScope.releases, {product: {name: $scope.item.name}});
    }
}
