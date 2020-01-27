var mike = {
    age: 24,
    name: "Sadik",
    say: function () {
        return "My name is " + this.name +
            " and I'm " + this.age + " years old!";
    }
};
function sayIt(person) {
    return person.say();
}
document.body.innerHTML = sayIt(mike);
