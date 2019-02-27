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
import homeController from './controllers/home.es6';
import listController from './controllers/list.es6';
import detailController from './controllers/detail.es6';
import editController from './controllers/edit.es6';

// directives
import tagsDirective from './directives/tags.es6';
import previewDirective from './directives/preview.es6';
import listDirective from './directives/list.es6';
import listItemDirective from './directives/list-item.es6';

// templates
import homeTemplate from './../html/templates/home.html';
import featuresListTemplate from './../html/templates/features/list.html';
import featuresDetailTemplate from './../html/templates/features/detail.html';
import featuresEditTemplate from './../html/templates/features/edit.html';
import releasesListTemplate from './../html/templates/releases/list.html';
import releasesDetailTemplate from './../html/templates/releases/detail.html';
import appsListTemplate from './../html/templates/apps/list.html';
import appsDetailTemplate from './../html/templates/apps/detail.html';
import customsListTemplate from './../html/templates/customs/list.html';
import customsDetailTemplate from './../html/templates/customs/detail.html';

angular.module('app', ['ngRoute'])
    .factory('api', apiService)
    .factory('loader', loaderService)
    .controller('homeController', homeController)
    .controller('listController', listController)
    .controller('detailController', detailController)
    .controller('editController', editController)
    .directive('tags', tagsDirective)
    .directive('preview', previewDirective)
    .directive('list', listDirective)
    .directive('listItem', listItemDirective)
    .filter('startFromFilter', startFromFilter)
    .filter('trustHtmlFilter', trustHtmlFilter)
    .filter('trustResourceFilter', trustResourceFilter)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                template: homeTemplate
            })
            .when('/features/', {
                controller: 'listController',
                template: featuresListTemplate,
                reloadOnSearch: false
            })
            // .when('/features/new', {
            //     controller: 'editController',
            //     template: featuresEditTemplate
            // })
            // .when('/features/:id/edit', {
            //     controller: 'editController',
            //     template: featuresEditTemplate,
            //     reloadOnSearch: false,
            //     resolve: {
            //         editObj: function ($route, api) {
            //             let id = $route.current.params.id;
            //             return id ? api.call(`features/${id}`) : null
            //         }
            //     }
            // })
            .when('/features/:id', {
                controller: 'detailController',
                template: featuresDetailTemplate,
                reloadOnSearch: false,
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`features/${id}`);
                    }
                }
            })
            .when('/releases/', {
                controller: 'listController',
                template: releasesListTemplate,
                reloadOnSearch: false
            })
            .when('/releases/:id', {
                controller: 'detailController',
                template: releasesDetailTemplate,
                reloadOnSearch: false,
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`releases/${id}`);
                    }
                }
            })
            .when('/apps/', {
                controller: 'listController',
                template: appsListTemplate,
                reloadOnSearch: false
            })
            .when('/apps/:id', {
                controller: 'detailController',
                template: appsDetailTemplate,
                reloadOnSearch: false,
                resolve: {
                    detailObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`products/${id}`);
                    }
                }
            })
            .when('/customs/', {
                controller: 'listController',
                template: customsListTemplate,
                reloadOnSearch: false
            })
            .when('/customs/:id', {
                controller: 'detailController',
                template: customsDetailTemplate,
                reloadOnSearch: false,
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
        $rootScope.$on('loader:loaded', function() {
            $rootScope.loaded = true;    
        });
    });
