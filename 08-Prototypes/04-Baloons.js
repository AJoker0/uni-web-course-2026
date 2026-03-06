function solution() {
    //base baloon class
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    //partyBallon class (inherits from balloon_)
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            //call the parent class constructor
            super(color, gasWeight);
            //set up a backing field for the ribbon property
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength

            };
        }
        //getter for the ribbon property
        get ribbon() {
            return this._ribbon;
        }
    }
    //birtdayBalloon class (ibherits from PartBalloon)
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, getWeight, ribbonColor, ribbonLength, text) {
            //call the parent class constructor'super(color, gasWeight, ribbonLength);

            //set up  a backiing field for the text
            this._text = text;
        }
        // getter for the text property
        get text() {
            return this._text;
        }
    }
    //*return an object containing all the classes
    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    };
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);