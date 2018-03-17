function areaOfSquare(side, returnInteger) {
    if (returnInteger) {
        return Math.floor(side * side);
    }
    return side * side;
}
console.log(areaOfSquare(7.34));
console.log(areaOfSquare(7.34, true));
