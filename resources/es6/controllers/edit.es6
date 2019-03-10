export default /** @ngInject */ function (loader, api, $rootScope, $scope, $routeParams, $location) {
    const section = $routeParams.section;
    const id = parseInt($routeParams.id) || false;

    const loadItem = (section, id) => {
        api.call(`${section}/${id}`, 'get').then((response) => {
            $scope.item = response.data[0];
            $scope.item.tags = [$scope.item.product, $scope.item.type];
            $scope.itemIsLoading = false;
        });
    };

    const modifyRootScopeItem = (id) => {
        for (var i in $rootScope[section]) {
            if ($rootScope[section][i].id === id) {
                $rootScope[section][i] = $scope.item;
                break;
            }
        }
    };
    
    [$scope.item, $scope.itemIsLoading] = loader.getItemFromRootScope(section, id);
    angular.equals({}, $scope.item) && id ? loadItem(section, id) : {};

    $scope.save = () => {
        api.call(`${section}/${id}`, 'post', $scope.item).then((response) => {
            if (id) {
                modifyRootScopeItem(id)
            } else {
                $rootScope[section].push($scope.item);
            }
            $location.path(`/${section}/${$scope.item.id}`);
        });
    };

    $scope.delete = () => {
        if (confirm('Are you sure?')) {
            api.call(`${section}/${id}`, 'delete').then((response) => {
                $location.path(`${section}/`);
            });
        }
    };
}
