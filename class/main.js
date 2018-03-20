window.onload = function () {
    var Website = /** @class */ (function () {
        function Website(url, fblikes) {
            this.url = url,
                this.fblikes = fblikes;
        }
        return Website;
    }());
    var google = new Website("http://google.co.in", 1234455);
    document.body.innerHTML = "The URL for Google, India is " + google.url + ". It's got " + google.fblikes + " Likes in Facebook.";
    document.body.innerHTML += "<br><br>======================================<br><br>";
    // example for getter
    var Rectangle = /** @class */ (function () {
        function Rectangle(s1, s2) {
            this.side1 = s1,
                this.side2 = s2;
        }
        Object.defineProperty(Rectangle.prototype, "area", {
            get: function () {
                return this.side1 * this.side2;
            },
            enumerable: true,
            configurable: true
        });
        return Rectangle;
    }());
    var myRect = new Rectangle(23, 45);
    document.body.innerHTML += "Area of my rectangle is " + myRect.area + ".";
};
