/**
 * Created by f on 2016/3/9.
 */
(function () {
    var _cQuery = window.cQuery,
        cQuery = function () {
            return new cQuery.fn.init();
        };
    cQuery.fn = cQuery.prototype = {
        init: function () {
            console.log(this);
            return this;
        },
        test: function () {
            console.log('test');
        }
    };
    cQuery.fn.init.prototype = cQuery.fn;
    window.C = window.cQuery = cQuery;
})();
