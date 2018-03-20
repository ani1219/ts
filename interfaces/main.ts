
window.onload = function(){

	interface calAreaInterface{
		shape: string,
		side?: number,
		radius?: number
	}

	function calArea(x:calAreaInterface):string{
		let areaVal:number;
		if(!x.radius){
			areaVal = x.side * x.side;
		}else if(!x.side){
			areaVal = Math.PI * x.radius * x.radius;
		}

		return `The area of <b>${x.shape}</b> is <b>${areaVal}</b>.`;
	}

	let mySqr = calArea({shape: "square", side: 6});
	let myCir = calArea({shape: "circle", radius: 3});

	document.body.innerHTML = mySqr + "<br>" + myCir;
}
