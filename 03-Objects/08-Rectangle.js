/* const rectangle = (width, height, color) => {
    return {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;

        }

    };
   
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea()); // 20
 */


function rectangle(width, height, color) {
    // make the first letter of the color uppercase
    // color[0] - the first letter of the color
    // .slice(1) - the rest of the color starting from the second letter
    let niceColor = color[0].toUpperCase() + color.slice(1);

    // create and return object 
    return {
        width: width,
        height: height,
        color: niceColor,
        
        // method to calculate the square of the rectangle
        // important to use 'this' to access the properties of the object
        calcArea: function() {
            return this.width * this.height;
        }
    };
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea()); // 20