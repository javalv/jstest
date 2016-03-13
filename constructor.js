/**
 * Created by lin on 16/3/13.
 */
(function () {
    function Constructor (){
        if(!(this instanceof Constructor)){
            throw new Error("Constructor instance not with 'new'");
        }
    }
    //var a = Constructor();
    var con = new Constructor();

})();


function outer(){
    var localValue = 'zhangsan';
    return function () {
        return localValue;
    }
}


var func = outer();
func();

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

    }

    App.prototype.extend = function (method,args) {
        var argsStr ;
        if(typeof args === 'object' && args){
            argsStr = JSON.stringify(args);
        }else{
            argsStr = args;
        }
        console.info(method + ',' + argsStr);
    }

    var app = create(config);

    window.$ = window.$app = app();

})(conf);

$.extend('goShopping',{
    'id' : 123
});
$app.extend('goShopping','456');

$app.init();