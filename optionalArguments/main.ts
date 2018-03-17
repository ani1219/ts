function areaOfSquare(side:number, returnInteger?:boolean):number{
	if(returnInteger){
		return Math.floor(side * side)
	}
	return side * side;
}

console.log(areaOfSquare(7.34));
console.log(areaOfSquare(7.34, true));
console.log(areaOfSquare(2.34, true));