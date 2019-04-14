export default /** @ngInject */ function (data, $rootScope, $scope, $routeParams, $filter) {
    angular.extend($rootScope, data);

    const section = $routeParams.section;
    
    $scope.appsWithFeatures = $filter('filter')($rootScope.apps, {features_count: '!0'});
    $scope.appsWithReleases = $filter('filter')($rootScope.apps, {releases_count: '!0'});
    $scope.appsWithCustoms = $filter('filter')($rootScope.apps, {releases_count: '!0'});
    $scope.typesWithFeatures = $filter('filter')($rootScope.types, {features_count: '!0'});
    $scope.typesWithCustoms = $filter('filter')($rootScope.types, {features_count: '!0'});
}
