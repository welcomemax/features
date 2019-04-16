export default /** @ngInject */ function(copyToClipboardService) {
    return {
        restrict: 'A',
        scope: {
            onCopied: '&',
            onError: '&',
            text: '=',
            supported: '=?'
        },
        link: function(scope, element) {
            scope.supported = copyToClipboardService.supported;

            element.on('click', function(event) {
                try {
                    copyToClipboardService.copyText(scope.text, element[0]);
                    if (angular.isFunction(scope.onCopied)) {
                        scope.$evalAsync(scope.onCopied());
                    }
                } catch (err) {
                    if (angular.isFunction(scope.onError)) {
                        scope.$evalAsync(scope.onError({ err: err }));
                    }
                }
            });
        }
    };
}