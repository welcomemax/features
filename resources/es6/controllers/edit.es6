export default /** @ngInject */ function (api, $rootScope, $scope, $routeParams, $location) {
    const section = $routeParams.section;
    const id = $routeParams.id;
    
    $scope.item = {};

    id && api.call(`${section}/${id}`, 'get').then(function(response) {
        $scope.item = response.data[0];
        $scope.item.tags = [$scope.item.product, $scope.item.type];
    });

    $scope.save = function() {
        api.call(`${section}/${id}`, 'post', $scope.item).then(function(response) {
            console.log(response);
            $location.path(`/detail/${id}`);
        });
    };

    $scope.delete = function() {
        if (confirm('Are you sure?')) {
            api.call(`${section}/${id}`, 'delete').then(function(response) {
                console.log(response);
                $location.path('/');
            });
        }
    };
}
