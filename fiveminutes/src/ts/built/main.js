window.onload = function () {
    var Student = /** @class */ (function () {
        function Student(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
            this.fullName = firstName + " " + middleName + " " + lastName;
        }
        return Student;
    }());
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    // let user = "John Smith";
    var user = new Student("John", "S.", "Smith");
    document.body.innerHTML = greeter(user) + "<br /></br/>";
    document.body.innerHTML += user.firstName + "<br /></br/>";
    document.body.innerHTML += user.lastName + "<br /></br/>";
    document.body.innerHTML += user.fullName + "<br /></br/>";
};
