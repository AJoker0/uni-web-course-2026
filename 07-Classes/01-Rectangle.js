/* const rectangle = (width, height, color) => {
    const calcArea = () => Number(width) * Number(height);
    const calcPerimeter = () => 2 * (Number(width) + Number(height));
    const toString = () => `Rectangle: ${color} ${width}x${height}`;
    

    return {
        width,
        height,
        color,
        calcArea,
        calcPerimeter,
        toString

    }

};

let rect = rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea()); */






class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());



/* function Rectangle(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;

    // you can define methods directly on this instance like this, though using the prototype (or class syntax) is better for memory.
    this.calcArea = () => Number(this.width) * Number(this.height);
    this.calcPerimeter = () => 2 * (Number(this.width) + Number(this.height));
    this.toString = () => `Rectangle: ${this.color} ${this.width}x${this.height}`;

}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
 */