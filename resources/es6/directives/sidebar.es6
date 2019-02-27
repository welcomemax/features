/** @ngInject */ function sidebarDirective() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: /** @ngInject */ function menuController($scope, $location) {
            let items = [];

            this.addItem = (item) => {
                items.push(item);
            };
        },
        template: `
            <aside class="sidebar">
                <div class="sidebar-header">{{ header }}</div>
                <div class="sidebar-body" ng-transclude></div>
                <div class="sidebar-footer">{{ footer }}</div>
            </aside>  
        `
    };
}

/** @ngInject */ function sidebarGroupDirective() {
    return {
        require: '^^sidebar',
        replace: true,
        restrict: 'E',
        transclude: true,
        scope: {
            header: '@',
            search: '='
        },
        link: function (scope, element, attrs, menuController) {
            menuController.addItem(scope);
            console.log(scope);
        },
        template: `
            <div class="sidebar-group">
                <div class="sidebar-group-header" ng-if="header">{{ header }}</div>
                <div class="sidebar-group-body" ng-transclude></div>
            </div>
        `
    };
}

export {sidebarDirective, sidebarGroupDirective};