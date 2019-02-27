// vendors
import 'angular';
import 'angular-route';

// filters
import trustHtmlFilter from './filters/trust-html.es6';
import trustResourceFilter from './filters/trust-resource.es6';
import startFromFilter from './filters/start-from.es6';

// services
import apiService from './services/api.es6';
import loaderService from './services/loader.es6';

// controllers
import appController from './controllers/app.es6';
import homeController from './controllers/home.es6';
import listController from './controllers/list.es6';
import detailController from './controllers/detail.es6';
import editController from './controllers/edit.es6';

// directives
import tagsDirective from './directives/tags.es6';
import previewDirective from './directives/preview.es6';
import listDirective from './directives/list.es6';
import listItemDirective from './directives/list-item.es6';
import {menuDirective, menuItemDirective} from './directives/menu.es6';
import {sidebarDirective, sidebarGroupDirective} from './directives/sidebar.es6';

angular.module('app', ['ngRoute'])
    .factory('api', apiService)
    .factory('loader', loaderService)
    .controller('appController', appController)
    .controller('homeController', homeController)
    .controller('listController', listController)
    .controller('detailController', detailController)
    .controller('editController', editController)
    .directive('tags', tagsDirective)
    .directive('preview', previewDirective)
    .directive('list', listDirective)
    .directive('listItem', listItemDirective)
    .directive('menu', menuDirective)
    .directive('menuItem', menuItemDirective)
    .directive('sidebar', sidebarDirective)
    .directive('sidebarGroup', sidebarGroupDirective)
    .filter('startFromFilter', startFromFilter)
    .filter('trustHtmlFilter', trustHtmlFilter)
    .filter('trustResourceFilter', trustResourceFilter)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: '/templates/home.html'
            })
            .when('/features/', {
                controller: 'listController',
                templateUrl: '/templates/features/list.html'
            })
            .when('/features/new', {
                controller: 'editController',
                templateUrl: '/templates/features/edit.html',
            })
            .when('/features/:id/edit', {
                controller: 'editController',
                templateUrl: '/templates/features/edit.html',
                resolve: {
                    editObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return id ? api.call(`features/${id}`) : null
                    }
                }
            })
            .when('/features/:id', {
                controller: 'detailController',
                templateUrl: '/templates/features/detail.html',
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`features/${id}`);
                    }
                }
            })
            .when('/releases/', {
                controller: 'listController',
                templateUrl: '/templates/releases/list.html'
            })
            .when('/releases/:id', {
                controller: 'detailController',
                templateUrl: '/templates/releases/detail.html',
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`releases/${id}`);
                    }
                }
            })
            .when('/apps/', {
                controller: 'listController',
                templateUrl: '/templates/apps/list.html'
            })
            .when('/apps/:id', {
                controller: 'detailController',
                templateUrl: '/templates/apps/detail.html',
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`products/${id}`);
                    }
                }
            })
            .when('/customs/', {
                controller: 'listController',
                templateUrl: '/templates/cusoms/list.html'
            })
            .when('/customs/new', {
                controller: 'editController',
                templateUrl: '/templates/customs/edit.html',
            })
            .when('/customs/:id/edit', {
                controller: 'editController',
                templateUrl: '/templates/customs/edit.html',
                resolve: {
                    editObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return id ? api.call(`customs/${id}`) : null
                    }
                }
            })
            .when('/customs/:id', {
                controller: 'detailController',
                templateUrl: '/templates/customs/detail.html',
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`customs/${id}`);
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(
        ['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }],
        ['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }]
    )
    .run(/** @ngInject */ function(loader, $rootScope) {
    });
