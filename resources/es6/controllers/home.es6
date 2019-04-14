export default /** @ngInject */ function (data, $rootScope, $scope) {
    angular.extend($rootScope, data);
    
    setTimeout(() => {
        $rootScope.initCounters();
    })

    $rootScope.initCounters = () => {
        const easeOutQuart = (t, b, c, d) => {
            return -c * (( t = t / d - 1) * t * t * t - 1) + b;
        };
    
        const counters = [...document.querySelectorAll('.counter-value')];

        const time = {
            total: 10000,
            start: performance.now()
        };

        const tick = now => {
            const elapsed = now - time.start,
                progress = easeOutQuart(elapsed, 0, 1, time.total);

            counters.forEach(s => s.textContent = Math.round(progress * s.attributes['data-value'].textContent).toLocaleString())
            elapsed < time.total ? window.requestAnimationFrame(tick) : null;
        }
        
        window.requestAnimationFrame(tick);
    }
}
