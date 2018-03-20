window.onload = function(){
	class Website{
		url:string;
		fblikes: number;

		constructor(url: string, fblikes: number){
			this.url = url,
			this.fblikes = fblikes
		}
	}
let google = new Website("http://google.co.in", 1234455);
document.body.innerHTML = `The URL for Google, India is ${google.url}. It's got ${google.fblikes} Likes in Facebook.`;
document.body.innerHTML += "<br><br>======================================<br><br>";

// example for getter

	class Rectangle{
		side1: number;
		side2: number;

		constructor(s1: number, s2: number){
			this.side1 = s1,
			this.side2 = s2
		}

		get area(): number{
			return this.side1 * this.side2;
		}
	}

	let myRect = new Rectangle(23, 45);

	document.body.innerHTML += `Area of my rectangle is ${myRect.area}.`;
};


