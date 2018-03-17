var myConst;
(function (myConst) {
    myConst[myConst["pi"] = 3.14] = "pi";
    myConst[myConst["e"] = 2.73] = "e";
    myConst[myConst["log2"] = 0.3] = "log2";
    myConst[myConst["log3"] = 0.7] = "log3";
})(myConst || (myConst = {}));
var radius = 13;
console.log("Finding Circumfrence of the circle");
document.write("Finding Circumfrence of the circle");
document.write(2 * myConst.pi * radius);
console.log(2 * myConst.pi * radius);
