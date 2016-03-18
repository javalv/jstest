/**
 * Created by f on 2016/3/9.
 */
var conf = {
    env : 'iso'
};
(function (config) {

    var inited = false;

    var create = function (config) {
        return function () {
            var app = new App(config);
            app.init();
            return app;
        }

    }

    var App = function (config) {
        this.init = function () {
            if(inited){
                throw new Error("count not call in outer ");
            }
            console.info('init ... ' + JSON.stringify(config));
            inited = true;
        }

        this.ready = function (func) {
            window.document.addEventListener('DOMContentLoaded', function () {
                console.info('DOMContentLoaded...');
                func();
            });
        }

    }

    App.prototype = {

        extend : function(method,handler){
            window[method] = function (args) {
                handler(args);
            }
        },

        callNative : function(method,params){
            var func = window[method];
            return func(params);
        }
    }

    var app = create(config);

    window.$ = window.$app = app();

})(conf);


