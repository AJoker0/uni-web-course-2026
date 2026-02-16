/* const heroes = () => {
    return {
        mage: function(name) {
            return {
                name: name,
                health: 100,
                mana: 100,
                cast: function(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        },
        fighter: function(name) {
            return {
                name: name,
                health: 100,
                stamina: 100,

                fight: function() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        }
    }

}

let create = heroes(); // Сначала получаем "фабрику"

const scorcher = create.mage("Scorcher"); // Создаем мага
scorcher.cast("fireball"); // Проверяем магию (99 маны)

const leonidas = create.fighter("Leonidas"); // Создаем бойца
leonidas.fight(); // Проверяем атаку (99 стамины)

console.log(scorcher.mana);   // 99
console.log(leonidas.stamina); // 99 */


function solve() {
    // return the object-factory 
    return {
        // method to create mage
        mage: function(name) {
            return {
                name: name,
                health: 100,
                mana: 100,
                // Magicians ability
                cast: function(spell) {
                    this.mana--; // decrease mana by 1
                    console.log(`${this.name} cast ${spell}`);
                }
            };
        },
        // method to create fighter
        fighter: function(name) {
            return {
                name: name,
                health: 100,
                stamina: 100, //выносливость
                // Fighter's ability
                fight: function() {
                    this.stamina--; 
                    console.log(`${this.name} slashes at the foe!`);
                }
            };
        }
    };
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);




/* function solve() {
    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    })

    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foe!`);
            state.stamina--;
        }
    })
    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(state, canFight(state));
    }
    const mage = (name) => {
        let state = {
            name, 
            health: 100,
            mana: 100
        }
        return Object.assign(state, canCast(state));
    }
    return {mage:mage, fighter: fighter};
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana); */