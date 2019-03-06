export default /** @ngInject */ function (api, $rootScope, $scope, $routeParams, $location) {
    const section = $routeParams.section;
    const id = parseInt($routeParams.id);
    
    $scope.item = {};
    $scope.itemIsLoading = true;

    id && api.call(`${section}/${id}`, 'get').then((response) => {
        $scope.itemIsLoading = false;
        $scope.item = response.data[0];
        $scope.item.tags = [$scope.item.product, $scope.item.type];
    });

    $scope.save = () => {
        api.call(`${section}/${id}`, 'post', $scope.item).then((response) => {
            for (var i in $rootScope[section]) {
                if ($rootScope[section][i].id === id) {
                    $rootScope[section][i] = $scope.item;
                    break;
                }
            }
            $location.path(`/${section}/${id}`);
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
