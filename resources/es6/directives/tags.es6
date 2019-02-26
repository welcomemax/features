import template from '../../html/directives/tags.html';

export default /** @ngInject */  function() {
    return {
        scope: {
            items: '=',
            search: '=',
            icon: '=',
            active: '='
        },
        template: template,
        replace: true,
        controller: /** @ngInject */ function($scope) {
            $scope.filterTag = ($event, tag) => {
                let $tagItem = angular.element($event.currentTarget).parent();

                $scope.search = !$tagItem.hasClass('tags-item-active') ? tag.name : '';             
                
                $document.find('li').removeClass('tags-item-active');
                $tagItem.toggleClass('tags-item-active');
            };
        }
    }
}
