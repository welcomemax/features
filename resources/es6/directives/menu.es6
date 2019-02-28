/** @ngInject */ function menuDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        controller: /** @ngInject */ function menuController($scope, $location) {
            let items = [];

            this.addItem = (item) => {
                items.push(item);
            };

            $scope.$on('$locationChangeSuccess', function() {
                angular.forEach(items, (item) => {
                    if (item.link === '/') {
                        item.active = $location.$$url === item.link;
                    } else {
                        item.active = !!~$location.$$url.search(item.link)
                    }
                });
            });
        },
        template: `
            <nav class="nav">
                <ul class="nav-menu" ng-transclude></ul>
            </nav>
        `
    };
}

/** @ngInject */ function menuItemDirective() {
    return {
        require: '^^menu',
        replace: true,
        restrict: 'E',
        transclude: true,
        scope: {
            link: '@',
            buttonNew: '='
        },
        link: function (scope, element, attrs, menuController) {
            menuController.addItem(scope);
        },
        template: `
            <li class="nav-menu-item" ng-class="{ 'nav-menu-item-active': active }">
                <a ng-if="buttonNew" class="nav-menu-item-button" href="/#{{ link }}new/" title="Add a new one">
                    <i class="icon icon-cross"></i>
                </a>
                <a class="nav-menu-item-link" ng-href="/#{{ link }}">
                    <span class="nav-menu-item-notification" ng-if="notify"></span>
                    <span class="nav-menu-item-label" ng-transclude></span>
                </a>
            </li>
        `
    };
}

export {menuDirective, menuItemDirective};