var ITDog = /** @class */ (function () {
    function ITDog(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return ITDog;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new ITDog("John", "Dog", "Doe");
document.body.innerHTML = greeter(user);
