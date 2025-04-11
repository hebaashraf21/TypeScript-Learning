class Member
{
    name:string;
    age:number;

    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age;
    }

    greeMember():string{
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const member = new Member("Heba",24);
console.log(member.greeMember());