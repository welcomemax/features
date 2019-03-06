export default /** @ngInject */ function ($rootScope, $scope) {
    $rootScope.isLoading = true;
    
    $rootScope.toggleLoader = (value) => {
        $rootScope.isLoading = value;
    };
    
    $rootScope.$on('$routeChangeStart', () => {
        $rootScope.toggleLoader(true);
        $rootScope.search = '';
    });

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.toggleLoader(false);
    });

    $rootScope.$on('$viewContentLoaded', () => {
        $rootScope.toggleLoader(false);
    });
}