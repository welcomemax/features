import template from '../../html/directives/list.html';

export default /** @ngInject */ function listDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: template,
        scope: {
            items: '=',
            type: '@',
            title: '@',
            show: '@',
            perPage: '@',
            size: '@',
            limit: '@'
        },
        controller: /** @ngInject */ function listController($rootScope, $scope, $location) {
            $scope.currentSection = !!~$location.$$url.search($scope.type);
            const strictSearch = true;
            
            $scope.page = 0;
            $scope.perPage = $scope.limit || $scope.perPage || 8;

            $scope.sortType = 'id';
            $scope.sortReverse = false;
            
            if ($scope.limit && $scope.items) {
                $scope.items = $scope.items.slice(0, $scope.limit);
            }

            $scope.filterItems = $scope.items;

            const checkPagination = () => {
                return $scope.filterItems && $scope.filterItems.length && $scope.totalPages() > 1;
            }

            $scope.isFirstPage = () => {
                return $scope.page == 0;
            };
        
            $scope.isLastPage = () => {
                return $scope.page == Math.ceil($scope.filterItems.length / $scope.perPage - 1);
            };
        
            $scope.totalPages = () => {
                return Math.ceil($scope.filterItems.length / $scope.perPage);
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

            $scope.paginationEnabled = checkPagination();

            $rootScope.$watch('search', (newValue, oldValue) => {
                if (oldValue !== newValue && $scope.items) {
                    $scope.currentPage = 0;

                    const searchValue = newValue.toLowerCase();

                    if (searchValue === '') {
                        $scope.filterItems = $scope.items;
                    } else {
                        $scope.filterItems = $scope.items.filter((item) => {
                            let searchData = [
                                item.title, 
                                item.caption, 
                                item.data
                            ]

                            item.type && searchData.push(item.type.name);
                            item.product && searchData.push(item.product.name);

                            const strData = searchData.join(' ').toLowerCase();

                            if (strictSearch) {
                                return !!~strData.indexOf(searchValue);
                            } else {
                                return searchValue.split(' ').some((word) => {
                                    return !!~strData.indexOf(word);
                                })
                            }
                        })
                    }
                    
                    $scope.paginationEnabled = checkPagination();

                    if (!$scope.filterItems) {
                        // @TODO empty result
                    }
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