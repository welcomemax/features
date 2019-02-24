export default /** @ngInject */ function (featureObj, $scope) {
    $scope.item = featureObj.data[0];
    $scope.item.tags = [$scope.item.type, $scope.item.product];
}
