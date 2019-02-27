export default /** @ngInject */ function (loader, $rootScope, $scope) {

    $rootScope.isLoading = true;

    $rootScope.$on('loader:loaded', function() {
        $rootScope.toggleLoader(false);
    });

    $rootScope.toggleLoader = (value) => {
        $rootScope.isLoading = value;
    };
    
    $rootScope.$on('$routeChangeStart', () => {
        $rootScope.toggleLoader(true);
    });

    // $rootScope.$on('$routeChangeSuccess', function() {
    //     $rootScope.toggleLoader(false);
    // });

    // $rootScope.$on('$viewContentLoaded', () => {
    //     $rootScope.toggleLoader(false);
    // });
}