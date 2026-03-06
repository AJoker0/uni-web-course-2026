function extensibleObject() {
    //create a new object with its own empty prototype
    const obj = Object.create({});

    // add the 'extend' function to our object
    obj.extend = function(template) {
        //loop through every key in the provided template object 
        for ( let key in template) {
            // check if the current item is a function
            if (typeof template[key] === 'function') {
                // if it is a function add it to the prototype
                Object.getPrototypeOf(this)[key] = template[key];
            } else {
                // if its a regular value (string, number etc.) add it to the instance
                this[key] = template[key];
            }
        }
    };
    return obj;
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function() { console.log("I am a method!"); },
    extensionProperty: 'Something'
}; 
myObj.extend(template);
console.log(myObj.extensionProperty);
myObj.extensionMethod();