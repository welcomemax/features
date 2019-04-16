export default /** @ngInject */ function($timeout) {
    return {
        show(message) {
            if (!message) {
                return;
            }

            let container = document.querySelector('.notifications');
            let item = document.createElement('div');
            
            item.innerHTML = message;
            item.className = 'notifications-item';
            
            container.appendChild(item);
            
            $timeout(() => container.removeChild(item), 10000);
        }
    };
};