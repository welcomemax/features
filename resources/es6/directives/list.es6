import template from '../../html/directives/list.html';

export default /** @ngInject */ function listDirective() {
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        template: template,
        scope: {
            items: '=',
            search: '=',
            type: '@',
            title: '@',
            show: '@',
            perPage: '@',
            size: '@',
            limit: '@'
        },
        controller: /** @ngInject */ function listController($scope, $location) {
            $scope.currentSection = !!~$location.$$url.search($scope.type);
            
            $scope.page = 0;
            $scope.perPage = $scope.limit || $scope.perPage || 8;
            
            if ($scope.limit && $scope.items) {
                $scope.items = $scope.items.slice(0, $scope.limit);
            }

            $scope.sortType = 'id';
            $scope.sortReverse = false;

            $scope.filterItems = $scope.items;
            
            $scope.paginationEnabled = () => {
                return $scope.filterItems && $scope.filterItems.length && $scope.totalPages() > 1;
            }

            $scope.isFirstPage = () => {
                return $scope.page == 0;
            };
        
            $scope.isLastPage = () => {
                return $scope.page == Math.ceil($scope.items.length / $scope.perPage - 1);
            };
        
            $scope.totalPages = () => {
                return Math.ceil($scope.items.length / $scope.perPage);
            };
        
            $scope.startingItem = () => {
                return $scope.page * $scope.perPage;
            };
        
            $scope.pageBack = () => {
                $scope.page--;
            };
        
            $scope.pageForward = () => {
                $scope.page++;
            };



            $scope.$watch('search', (newValue, oldValue) => {
                if (oldValue !== newValue) {
                    $scope.currentPage = 0;
        
                    if ($scope.search === '') {
                        return $scope.filterItems = $scope.items;
                    }
        
                    // @FIXME drop filters or attach filterTag
                    // $scope.cleanFilters();

                    $scope.filterItems = $scope.items.filter((item) => {
                        // @FIXME separate words search (any order)
                        return $scope.search.split(' ').some((word) => {
                            // @TODO replace with Array.includes
                            return !![item.title, item.caption, item.data].indexOf(word);
                        })
                    })

                    console.log($scope.filterItems)
        
                    return $scope.filterItems;
                }
            }, true);


            // @TODO render sorter (rating, views)
            $scope.toggleSort = ($event) => {
                $scope.sortType = angular.element($event.currentTarget).attr("data-sort");
                $scope.sortReverse = !$scope.sortReverse;

                angular.element(document.querySelectorAll('.sort')).removeClass('asc desc');

                angular.element($event.currentTarget)
                    .addClass(['asc','desc'][+ $scope.sortReverse])
                    .removeClass(['asc','desc'][+ !$scope.sortReverse]);

                $scope.filterItems = $filter('orderBy')($scope.items, $scope.sortType, $scope.sortReverse);
            };
        }
    };
}