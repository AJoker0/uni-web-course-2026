const TimeToWalk = (steps, footprint, speed) => {
    const distanceInMeters = steps * footprint;
    const interval = Math.floor(distanceInMeters / 500) * 60;
    const speedInMps = speed / 3.6;
    const timeInSeconds = distanceInMeters / speedInMps;
    const totalTimeInSeconds = timeInSeconds + interval;

    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = Math.round(totalTimeInSeconds % 60);

    const hoursStr = hours.toString().padStart(2, '0');
    const minStr = minutes.toString().padStart(2, '0');
    const secStr = seconds.toString().padStart(2, '0');
    
    return `${hoursStr}:${minStr}:${secStr}`;

}

console.log(TimeToWalk(4000, 0.60, 5));
console.log(TimeToWalk(2564, 0.70, 5.5));

/*const TimeToWalk = (steps, footprint, speed) => {
    const distanceInMeters = steps * footprint;
    const distanceInKm = distanceInMeters / 1000;
    
    let interval = Math.floor(distanceInMeters / 500);
    let hours = Math.floor(distanceInKm / speed);
    let minutes = Math.floor((distanceInKm / speed - hours) * 60);
    let seconds = Math.floor((((distanceInKm / speed) - hours) * 60 - minutes) * 60);

    if (interval > 0) {
        minutes += interval;
    }


    return `${hours}:${minutes}:${seconds}`;
}
console.log(TimeToWalk(4000, 0.60, 5));
console.log(TimeToWalk(2564, 0.70, 5.5));*/

