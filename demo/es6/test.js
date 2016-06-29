export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

// main.js
import { mixins } from './mixins'

const Foo = {
    foo() { console.log('foo') }
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass()
obj.foo() // 'foo'