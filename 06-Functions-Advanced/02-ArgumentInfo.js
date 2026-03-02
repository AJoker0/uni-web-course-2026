




const argumentInfoBasic = (...args) => {
    // create an object to store the count
    let typeCounts = {};

    // loop through the arguments 
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        let type = typeof arg;

        // Immediately conclude information about the argument
        console.log(`${type}: ${arg}`);

        // if the type is not in the typeCounts object, initialize it with 0
        if (!typeCounts[type]) {
            typeCounts[type] = 0;
        }
        // increase the count for the type
        typeCounts[type]++;
    }
    // Convert the object into an array of arrays: ["string', (2], ['number', 1] ]
    let sortedTypes = Object.entries(typeCounts).sort((a, b) => {
        // Sort by count in descending order
        return b[1] - a[1];
    });
    // Output the sorted types and their counts
    for (let i = 0; i < sortedTypes.length; i++) {
        console.log(`${sortedTypes[i][0]} = ${sortedTypes[i][1]}`);
    }
}
argumentInfoBasic('cat', 42, function() { console.log('Hello world!'); });


/* 
function argumentInfoPro(...args) {
    // output list of arguments 
    args.forEach(arg => console.log(`${typeof arg}: ${arg}`));

    // count types by using reduce and structure Map
    const typeTally = args.reduce((acc, currentArg) => {
        const type = typeof currentArg;

        // take current value from counter (or 0) and increase it by 1
        acc.set(type, (acc.get(type) || 0) + 1);
        return acc;
    }, new Map()); // The initial value is an empty Map

    // Convert the Map into an array and sort it and output the result
    Array.from(typeTally.entries())
        .sort((a, b) => b[1] - a[1]) // a[1] and b[1] are values of counter
        .forEach(([type, count]) => console.log(`${type} = ${count}`));
}
argumentInfoPro('cat', 42, function() { console.log('Hello world!'); }); */