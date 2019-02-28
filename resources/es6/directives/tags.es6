import template from '../../html/directives/tags.html';

export default /** @ngInject */  function() {
    return {
        scope: {
            items: '=',
            icon: '=',
            active: '='
        },
        template: template,
        replace: true,
        controller: /** @ngInject */ function($rootScope, $scope) {
            $scope.filterTag = ($event, tag) => {
                let $tagItem = angular.element($event.currentTarget);

                $rootScope.search = !$tagItem.hasClass('tags-item-active') ? tag.name : '';

                angular.element(document.querySelectorAll('.tags-item')).removeClass('tags-item-active');
                $tagItem.parent().toggleClass('tags-item-active');
            };

            $rootScope.$watch('search', (newValue, oldValue) => {
                if (typeof newValue === 'undefined' && newValue !== oldValue) {
                    return;
                }

                const activeItem = document.querySelectorAll('.tags-item-active');

                if (!activeItem.length) {
                    return;
                }

                const $activeItem = angular.element(activeItem);

                if ($activeItem) {
                    const activeTagValue = $activeItem.text().trim();

                    if (activeTagValue !== newValue) {
                        $activeItem.removeClass('tags-item-active');
                    }
                }
            }) 
        }
    }
}
