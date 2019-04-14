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
import loaderDirective from './directives/loader.es6';
import tagsDirective from './directives/tags.es6';
import subscribersDirective from './directives/subscribers.es6';
import previewDirective from './directives/preview.es6';
import listDirective from './directives/list.es6';
import listItemDirective from './directives/list-item.es6';
import {menuDirective, menuItemDirective} from './directives/menu.es6';
import {sidebarDirective, sidebarGroupDirective} from './directives/sidebar.es6';
import {controlDirective, controlTextareaDirective, controlInputDirective, controlSelectDirective} from './directives/control.es6';

angular.module('app', ['ngRoute'])
    .factory('api', apiService)
    .factory('loader', loaderService)
    .controller('appController', appController)
    .controller('homeController', homeController)
    .controller('listController', listController)
    .controller('detailController', detailController)
    .controller('editController', editController)
    .directive('loader', loaderDirective)
    .directive('tags', tagsDirective)
    .directive('subscribers', subscribersDirective)
    .directive('preview', previewDirective)
    .directive('list', listDirective)
    .directive('listItem', listItemDirective)
    .directive('menu', menuDirective)
    .directive('menuItem', menuItemDirective)
    .directive('sidebar', sidebarDirective)
    .directive('sidebarGroup', sidebarGroupDirective)
    .directive('control', controlDirective)
    .directive('controlTextarea', controlTextareaDirective)
    .directive('controlSelect', controlSelectDirective)
    .directive('controlInput', controlInputDirective)
    .filter('startFromFilter', startFromFilter)
    .filter('trustHtmlFilter', trustHtmlFilter)
    .filter('trustResourceFilter', trustResourceFilter)
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: '/templates/home.html',
                resolve: {
                    data: loader => loader.getData()
                }
            })
            .when('/:section/', {
                controller: 'listController',
                templateUrl: params => `/templates/${params.section}/list.html`,
                resolve: {
                    data: loader => loader.getData()
                }
            })
            .when('/:section/new', {
                controller: 'editController',
                templateUrl: params => `/templates/${params.section}/edit.html`,
                resolve: {
                    data: loader => loader.getData()
                }
            })
            .when('/:section/:id/edit', {
                controller: 'editController',
                templateUrl: params => `/templates/${params.section}/edit.html`,
                resolve: {
                    data: loader => loader.getData()
                }
            })
            .when('/:section/:id', {
                controller: 'detailController',
                templateUrl: params => `/templates/${params.section}/detail.html`,
                resolve: {
                    data: loader => loader.getData()
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
