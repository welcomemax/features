export default /** @ngInject */ function (releasesObj, featuresObj, productsObj, $scope) {
    $scope.releases = releasesObj.data;
    $scope.features = featuresObj.data;
    $scope.products = productsObj.data;
}
