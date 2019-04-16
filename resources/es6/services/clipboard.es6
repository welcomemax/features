export default /** @ngInject */ function($window, $document) {
    let createNode = function(text) {
        var node = $document[0].createElement('textarea');
        node.style.position = 'absolute';
        node.textContent = text;
        node.style.left = '-10000px';
        node.style.top = ($window.pageYOffset || $document[0].documentElement.scrollTop) + 'px';

        return node;
    };

    let copyNode = function(node) {
        try {
            // Set inline style to override css styles
            $document[0].body.style.webkitUserSelect = 'initial';

            var selection = $document[0].getSelection();
            selection.removeAllRanges();
            node.select();

            if (!$document[0].execCommand('copy')) {
                throw('failure copy');
            }
            selection.removeAllRanges();
        } finally {
            // Reset inline style
            $document[0].body.style.webkitUserSelect = '';
        }
    };

    let copyText = function(text) {
        var node = createNode(text);
        $document[0].body.appendChild(node);
        copyNode(node);
        $document[0].body.removeChild(node);
    };

    return {
        copyText: copyText,
        supported: 'queryCommandSupported' in $document[0] && $document[0].queryCommandSupported('copy')
    };
}