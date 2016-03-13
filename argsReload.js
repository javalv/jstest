/**
 * Created by lin on 16/3/13.
 */
function Person(){

    var args = arguments;
    if(typeof args[0] === 'object' && args[0]){
        if(args[0].name){
            this.name = args[0].name;
        }

        if(args[0].age){
            this.name = args[0].age;
        }

    }else{
        if(args[0]){
            this.name = args[0];
        }
        if(args[1]){
            this.age = args[1];
        }
    }

}

Person.prototype.toString = function () {
    return this.name + ":" + this.age;
};

var p = new Person('zhangsan' , 14);
console.info(p);