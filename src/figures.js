class Figure {
    constructor(length){
        this.length = length;
    }

    getPerimeter() {
        alert('Calculating perimeter...');
    }

    getSquare() {
        alert('Calculating square...');
    }
}

class Rectangle extends Figure {
    constructor(length, width) {
        super(length);
        this.width = width;
    }

    getPerimeter() {
        super.getPerimeter();
        return (this.length + this.width) * 2;
    }
}

$("#rectangle_calculate").click(function() {
    let myWidth = Number($("#width").val());
    let myLength = Number($("#length").val());
    let rectangle = new Rectangle(myLength, myWidth);
    let perimeter = rectangle.getPerimeter();
    $("#answer_rectangle").text(`Perimeter = ${perimeter}`);
})