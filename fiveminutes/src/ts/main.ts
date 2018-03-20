window.onload = function(){

	class Student{
		fullName: string;
		constructor(public firstName: string, public middleName: string, public lastName: string){
			this.fullName = firstName + " " + middleName + " " + lastName;

		}
	}

	interface Person{
		firstName: string;
		lastName: string;
	}

	function greeter(person: Person){
		return "Hello, " + person.firstName + " " + person.lastName;
	}

	// let user = "John Smith";
	let user = new Student("John", "S.", "Smith");


	document.body.innerHTML = greeter(user) + "<br /></br/>";
	document.body.innerHTML += user.firstName + "<br /></br/>";
	document.body.innerHTML += user.lastName + "<br /></br/>";
	document.body.innerHTML += user.fullName + "<br /></br/>";


}
