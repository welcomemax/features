// vendors
import 'angular';
import 'angular-route';

// filters
import trustHtmlFilter from './filters/trust-html.es6';
import trustResourceFilter from './filters/trust-resource.es6';
import startFromFilter from './filters/start-from.es6';

// services
import apiService from './services/api.es6';

// controllers
import homeController from './controllers/home.es6';
import featuresListController from './controllers/features/list.es6';
import featuresDetailController from './controllers/features/detail.es6';
import featuresEditController from './controllers/features/edit.es6';
import releasesListController from './controllers/releases/list.es6';
import releasesDetailController from './controllers/releases/detail.es6';

// directives
import tagsDirective from './directives/tags.es6';
import previewDirective from './directives/preview.es6';

// templates
import homeTemplate from './../html/templates/home.html';
import featuresListTemplate from './../html/templates/features/list.html';
import featuresDetailTemplate from './../html/templates/features/detail.html';
import featuresEditTemplate from './../html/templates/features/edit.html';
import releasesListTemplate from './../html/templates/releases/list.html';
import releasesDetailTemplate from './../html/templates/releases/detail.html';

angular.module('app', ['ngRoute'])
    .factory('api', apiService)
    .controller('homeController', homeController)
    .controller('featuresListController', featuresListController)
    .controller('featuresDetailController', featuresDetailController)
    .controller('featuresEditController', featuresEditController)
    .controller('releasesListController', releasesListController)
    .controller('releasesDetailController', releasesDetailController)
    .directive('tags', tagsDirective)
    .directive('preview', previewDirective)
    .filter('startFromFilter', startFromFilter)
    .filter('trustHtmlFilter', trustHtmlFilter)
    .filter('trustResourceFilter', trustResourceFilter)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                template: homeTemplate,
                reloadOnSearch: false,
                resolve: {
                    releasesObj: function (api) {
                        return api.call('releases');
                    },
                    featuresObj: function (api) {
                        return api.call('features');
                    },
                    productsObj: function (api) {
                        return api.call('products');
                    },
                    typesObj: function (api) {
                        return api.call('types');
                    }
                }
            })
            .when('/features/', {
                controller: 'featuresListController',
                template: featuresListTemplate,
                reloadOnSearch: false,
                resolve: {
                    featuresObj: function (api) {
                        return api.call('features');
                    },
                    productsObj: function (api) {
                        return api.call('products/used');
                    },
                    typesObj: function (api) {
                        return api.call('types/used');
                    }
                }
            })
            .when('/features/new', {
                controller: 'featuresEditController',
                template: featuresEditTemplate
            })
            .when('/features/:id/edit', {
                controller: 'featuresEditController',
                template: featuresEditTemplate,
                reloadOnSearch: false,
                resolve: {
                    featureObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return id ? api.call(`features/${id}`) : null
                    }
                }
            })
            .when('/features/:id', {
                controller: 'featuresDetailController',
                template: featuresDetailTemplate,
                reloadOnSearch: false,
                resolve: {
                    featureObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`features/${id}`);
                    }
                }
            })
            .when('/releases/', {
                controller: 'releasesListController',
                template: releasesListTemplate,
                reloadOnSearch: false,
                resolve: {
                    releasesObj: function (api) {
                        return api.call('releases');
                    },
                    productsObj: function (api) {
                        return api.call('products/used');
                    },
                }
            })
            .when('/releases/:id', {
                controller: 'releasesDetailController',
                template: releasesDetailTemplate,
                reloadOnSearch: false,
                resolve: {
                    releaseObj: function ($route, api) {
                        let id = $route.current.params.id;
                        return api.call(`releases/${id}`);
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
    .run(/** @ngInject */ function($rootScope) {
        $rootScope.loaded = true;
    });
