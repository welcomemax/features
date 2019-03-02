export default /** @ngInject */ function (detailObj, $rootScope, $scope, $route, $filter) {
    const section = $route.current.params.section;

    $scope.item = detailObj.data[0];

    if (section === 'apps') {
        $scope.featuresByProduct =  $filter('filter')($rootScope.features, {product: {name: $scope.item.name}});
        $scope.releasesByProduct =  $filter('filter')($rootScope.releases, {product: {name: $scope.item.name}});
    }
}
