//aqui temos a mesma ideia do object.js, so que com função
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

Person.prototype = Object.create(personPrototype);
//atribuindo um construtor a pessoa. experimente remover esse comando e exec o cod para ver a diferença
Person.prototype.constructor = Person;

const person1 = new Person('João', 'Miranda', 30);
console.log(person1);
console.log(person1.fullName())

//aplicando herança

function SubPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'Oie';
}

//usando o Person.prototype como prototipo para SubPerson
SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson

const person2 = new SubPerson('Helena', 'Veira', 25)
console.log(person2);
console.log(person2.fullName());