window.onload = function () {
    function calArea(x) {
        var areaVal;
        if (!x.radius) {
            areaVal = x.side * x.side;
        }
        else if (!x.side) {
            areaVal = Math.PI * x.radius * x.radius;
        }
        return "The area of <b>" + x.shape + "</b> is <b>" + areaVal + "</b>.";
    }
    var mySqr = calArea({ shape: "square", side: 6 });
    var myCir = calArea({ shape: "circle", radius: 3 });
    document.body.innerHTML = mySqr + "<br>" + myCir;
};
