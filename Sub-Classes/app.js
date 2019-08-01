class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

// Customer - The class we creating 
// Person - The class we extending 
// We can use anything in Person
// But not the other way round 
// Only one way     
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone
        this.membership = membership
    }
    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard')

// Because we've extended the class we can now access all of Person's methods such as greeting()
console.log(john.greeting())

console.log(Customer.getMembershipCost())