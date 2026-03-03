const rectangle = (width, height, color) => {
    const calcArea = () => Number(width) * Number(height);
    const calcPerimeter = () => 2 * (Number(width) + Number(height));
    const toString = () => `Rectangle: ${color} ${width}x${height}`;

    return {
        width,
        height,
        color,
        calcArea,

    }
};

let rect = new rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());