const personProtoype = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    },

};

//aqui, é definido personPrototype como prototipo de another person
//o q esse comando faz é criar uma sombra do prototipo nessa instancia.
//se nd for alterado no anotherPerson, ele refletirá tudo que esta na personPrototype.
const anotherPerson = Object.create(personProtoype)
//observe que ao remover o comentario do comando abaixo, o firstName exibido no log sera 'Joana', e nao mais Luiz
//porem, o comando de fullName, exibira o lastName 'Miranda', pois ele nao foi passado para anotherPerson
//anotherPerson.firstName = 'Joana'
console.log(anotherPerson)
console.log(anotherPerson.firstName)
console.log(anotherPerson.fullName())