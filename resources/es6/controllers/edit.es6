export default /** @ngInject */ function (editObj, api, $scope, $routeParams, $location) {
    $scope.id = $routeParams.id;
    $scope.item = id ? editObj.data[0] : {};

    $scope.save = function() {
        api(`items/${id}`, 'post', $scope.item).then(function(response) {
            console.log(response);
            $location.path(`/detail/${id}`);
        });
    };

    $scope.delete = function() {
        if (confirm('Are you sure?')) {
            api(`items/${id}`, 'delete').then(function(response) {
                console.log(response);
                $location.path('/');
            });
        }
    };
}