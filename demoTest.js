var callMethod = {
    invoke : function () {
        return function (name,age) {
            var name = arguments[0];
            console.info("callMethod.invoke " + name);
        }

    }
}

var func = callMethod.invoke();
func.call("zhangsan","张三",3);