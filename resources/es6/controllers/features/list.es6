export default /** @ngInject */ function (featuresObj, productsObj, typesObj, $scope, $document) {
    $scope.features = featuresObj.data;
    $scope.products = productsObj.data;
    $scope.types = typesObj.data;
    
    $scope.search = '';

    $scope.filterTag = ($event, tag, type) => {
        let $tagItem = angular.element($event.currentTarget).parent();

        $scope.search = !$tagItem.hasClass('tags-item-active') ? tag.name : '';             
        
        $document.find('li').removeClass('tags-item-active');
        $tagItem.toggleClass('tags-item-active');
    };
}
