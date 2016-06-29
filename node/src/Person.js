class Person {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString1() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

export function returnPerson(x, y) {
    var p = new Person(x, y);
    return p;
}

