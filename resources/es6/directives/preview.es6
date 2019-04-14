import template from '../../html/directives/preview.html';

export default /** @ngInject */  function($httpParamSerializer) {
    return {
        scope: {
            app: '=',
            show: '=',
            title: '@' 
        },
        template: template,
        replace: true,
        link: function(scope) {
            scope.show = false;
        },
        controller: /** @ngInject */ function($scope, $element, $rootScope) {
            $scope.previewCreate = () => {
                if (!$scope.url) {
                    return;
                }

                let preview = document.createElement('iframe');

                preview.src = $scope.url;
                preview.classList.add('preview-iframe');
                preview.onload = () => {
                    $element.addClass('preview-loaded')
                };

                $element.append(preview);

                return angular.element(preview);
            };

            $scope.previewDestroy = () => {
                if ($scope.preview) {
                    $scope.preview.detach();
                    $scope.preview = null;
                }

                $element.removeClass('preview-loaded');
            };

            const setPreviewUrl = (app) => {
                if (!app || !app.public_id) {
                    return;
                }

                const params = $httpParamSerializer({
                    'product': app.name,
                    'platform': 'features',
                    'templatesHide': true,
                    'installHide': true
                });

                $scope.icon = `/img/icons/apps/${app.alias}.svg`;

                return `https://apps.elfsight.com/preview/${app.public_id}?${params}`;
            };

            $scope.url = setPreviewUrl($scope.app);

            $scope.$watch('app', (app) => {
                $scope.url = setPreviewUrl($scope.app);
                $scope.preview = $scope.previewCreate();
            });

            $scope.$watch('show', (show) => {
                if (!!show) {
                    if (!$scope.preview) {
                        $scope.preview = $scope.previewCreate();
                    }
                } else {
                    $scope.preview && $scope.previewDestroy();
                }
            });
        }
    }
}
