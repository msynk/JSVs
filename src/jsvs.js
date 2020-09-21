function JSVs() {
    return mount(document.body);

    function mount(element) {
        var context = {};
        return m(element);
        function m(el) {
            me(el);
            for (var i = 0; i < el.children.length; i++) m(el.children[i]);
            return context;
            function me(e) {
                var attrs = e.attributes || {};
                var idAttr = attrs['id'];
                if (!idAttr || context[idAttr.value]) return;
                context[idAttr.value] = e;
            }
        }
    }
}