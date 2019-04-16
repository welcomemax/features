export default /** @ngInject */ function ($rootScope, $timeout, clipboard) {
    $rootScope.isLoading = true;
    
    $rootScope.toggleLoader = (value) => {
        $rootScope.isLoading = value;
    };
    
    $rootScope.$on('$routeChangeStart', () => {
        $rootScope.toggleLoader(true);
        $rootScope.search = '';
    });

    $rootScope.$on('$routeChangeSuccess', () => {
        $rootScope.toggleLoader(false);
    });

    $rootScope.$on('$viewContentLoaded', () => {
        $rootScope.toggleLoader(false);
    });

    $rootScope.clipboardSupported = clipboard.supported;
    $rootScope.clipboardCopy = (data) => {
        if (clipboard.supported) {
            clipboard.copyText(data);
            $rootScope.clipboardCopied = true;
            $timeout(function () {
                $rootScope.clipboardCopied = false;
            }, 5000);
        }
    };
}