export default /** @ngInject */ function (loader, api, $rootScope, $scope, $routeParams, $filter) {
    const section = $routeParams.section;
    const id = $scope.id = parseInt($routeParams.id);

    const loadItem = (section, id) => {
        api.call(`${section}/${id}`, 'get').then((response) => {
            $scope.item = response.data[0];
            $scope.item.tags = [$scope.item.product, $scope.item.type];
            $scope.itemIsLoading = false;
        });
    };

    const filterByProduct = (items, product_name) => {
        return $filter('filter')(items, {product: {name: product_name}});
    };

    [$scope.item, $scope.itemIsLoading] = loader.getItemFromRootScope(section, id);
    angular.equals({}, $scope.item) && loadItem(section, id);

    if (section === 'apps') {
        $scope.featuresByProduct = filterByProduct($rootScope.features, $scope.item.name);
        $scope.releasesByProduct = filterByProduct($rootScope.releases, $scope.item.name);
    }
}
