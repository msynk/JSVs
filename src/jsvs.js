var JSVs = (function () {

    return jsvs;

    function jsvs() {
        return mount(document.body);
    }

    // ========================================================================

    function mount(element) {
        var context = {};
        return m(element);

        function m(el) {
            me(el);
            if (el.children.length == 0) return;
            for (var i = 0; i < el.children.length; i++) m(el.children[i]);
            return context;

            function me(e) {
                var attrs = e.attributes || {};
                var idAttr = attrs['id'];
                if (!idAttr) return;
                if (context[idAttr.value]) throw new Error('duplicate HTML element id: ' + idAttr.value);
                context[idAttr.value] = e;
            }
        }
    }

})();