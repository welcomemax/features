import template from '../../html/directives/preview.html';

export default /** @ngInject */  function($httpParamSerializer) {
    return {
        scope: {
            app: '=',
            show: '@',
            title: '@' 
        },
        template: template,
        replace: true,
        link: function(scope) {
            scope.show = false;
        },
        controller: /** @ngInject */ function($scope, $element, $rootScope) {
            $scope.previewCreate = () => {
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
                $scope.preview.detach();
                $element.removeClass('preview-loaded');
                $scope.preview = null;
            };

            const setPreview = (app) => {
                const params = $httpParamSerializer({
                    'product': app.name,
                    'platform': 'features',
                    'templatesHide': true,
                    'installHide': true
                });
                $scope.url = `https://apps.elfsight.com/preview/${app.public_id}?${params}`;
                $scope.icon = `/img/icons/apps/${app.alias}.svg`;
            };

            $scope.app && setPreview($scope.app);

            $scope.$watch('app', (app) => {
                if (app) {
                    setPreview(app);
                    $scope.preview = $scope.previewCreate();
                }
            });

            $scope.$watch('show', (show) => {
                if (show && $scope.url) {
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
