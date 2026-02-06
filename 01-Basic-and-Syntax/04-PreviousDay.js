const previousDay = (year, month, day) => {
    const date = new Date(year, month -1, day);
    date.setDate(date.getDate() -1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();

    return `${newYear}-${newMonth}-${newDay}`;
}

console.log(previousDay(2016, 9, 30));
console.log(previousDay(2015, 5, 10));



/*const calculatePreviousDay = (currentDate) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - 1);
    
    //const day = date.getDate().toString().padStart(2, '0');
    const day = date.getDate();
    //const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${year}-${month}-${day}`;
}

console.log(calculatePreviousDay('2016, 9, 30'));
console.log(calculatePreviousDay('2015, 5, 10'));*/

