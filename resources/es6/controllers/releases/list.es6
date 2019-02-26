export default /** @ngInject */ function (releasesObj, productsObj, $scope, $document) {
    $scope.releases = releasesObj.data;
    $scope.products = productsObj.data;
}
