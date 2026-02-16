/* const constructionCrew = (worker) => {
    let weight = worker.weight;
    let experience = worker.experience;
    let levelOfHydrated = worker.levelOfHydrated;
    let dizziness = worker.dizziness;

    if (dizziness) {
        let hydrationIncrease = 0.1 * weight * experience;
        levelOfHydrated = levelOfHydrated + hydrationIncrease;
        worker.levelOfHydrated = levelOfHydrated;
        worker.dizziness = false;

    }
    return worker;

} */

function solve(worker) {
    //check if worker is dizzy
    if (worker.dizziness === true) {
        // calculate the hydration increase (0.1 * weight * experience)
        let waterAmount = 0.1 * worker.weight * worker.experience;

        // increase the level of hydration
        worker.levelOfHydrated = worker.levelOfHydrated + waterAmount;

        // set dizziness to false
        worker.dizziness = false;
    }
    return worker;
}
console.log(solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));
console.log(solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }));
console.log(solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }));