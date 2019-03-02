export default /** @ngInject */ function($injector) {
    class Loader {
        constructor($injector) {
            this.$rootScope = $injector.get('$rootScope');
            this.$q = $injector.get('$q');
            this.$route = $injector.get('$route');
            this.api = $injector.get('api');

            this.loadApiData();
        }

        loadApiData() {
            return this.$q.all([
                this.api.call('features'),
                this.api.call('releases'),
                this.api.call('apps'),
                this.api.call('types'),
                // this.api.call('customs')
            ]).then((results) => {
                angular.extend(this.$rootScope, {
                    features: results[0]['data'],
                    releases: results[1]['data'],
                    products: results[2]['data'],
                    types: results[3]['data'],
                    // customs: results[4]['data']
                });

                this.$rootScope.$broadcast('loader:loaded');
                this.$route.reload();
            });
        }
    }

    return new Loader($injector);
}