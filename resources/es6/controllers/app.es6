export default /** @ngInject */ function (loader, $rootScope, $scope) {
    $rootScope.isLoading = true;
    setTimeout(() => {
        $rootScope.loaderShow = true;
    }, 500)
    
    $rootScope.toggleLoader = (value) => {
        $rootScope.isLoading = value;
        if (!value) {
            setTimeout(() => {
                $rootScope.loaderShow = value;
            }, 500)
        }
    };
    
    $rootScope.$on('$routeChangeStart', () => {
        $rootScope.toggleLoader(true);
    });

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.toggleLoader(false);
    });

    $rootScope.$on('$viewContentLoaded', () => {
        $rootScope.toggleLoader(false);
    });
}