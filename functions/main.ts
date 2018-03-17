function addTwoNums(num1:any, num2:number): number {
	if(typeof num1 === "string"){
		if(isNaN(parseInt(num1, 10))){
			return 0;
		}
		num1 = parseInt(num1, 10);
	}
	return num1 + num2;
}

console.log(addTwoNums(12, 4534));
console.log(addTwoNums("100", 4534));
