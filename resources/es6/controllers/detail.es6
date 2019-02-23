export default /** @ngInject */ function (itemObj, $scope) {
    $scope.item = itemObj.data[0];
    $scope.item.tags = [$scope.item.type[0], $scope.item.product[0]];
}
