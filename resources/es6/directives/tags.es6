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
        controller: /** @ngInject */ function($scope, $document) {
            $scope.filterTag = ($event, tag) => {
                let $tagItem = angular.element($event.currentTarget);

                $scope.search = !$tagItem.hasClass('tags-item-active') ? tag.name : '';             
                
                console.log($scope.search)

                $document.find('li').removeClass('tags-item-active');
                $tagItem.parent().toggleClass('tags-item-active');
            };
        }
    }
}
