"use strict";
class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeMember() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
const member = new Member("Heba", 24);
console.log(member.greeMember());
//# sourceMappingURL=01-basic-class.js.map