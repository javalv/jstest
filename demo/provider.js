/**
 * Created by f on 2016/4/19.
 */

function ServiceFactory(){
    console.info('ServiceFactory');
    return new DemoService();
    //return '123'
}

ServiceFactory.prototype = {
    get: function () {
        console.info('get');
    }
}

function DemoService(){

    console.info('DemoService ');

}


var demoService;
function getService(){

    return (demoService || (demoService = new ServiceFactory()));
}

var service = getService();
console.info(service);
//var service1 = getService();


var A = {
    a:function(){}
}

//es6
var B = {
    foo() { console.log('foo') },
    b : function(){}
}
