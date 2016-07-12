'use strict';

var DOM = require("./DOMHandler");
let RNG = require("./randomNum");
let robots = require('./robots');
const $ = require('jQuery');
let weapons = require('./weapons');
// console.log(robots);
///////////////////

let robot1;
let robot2;


document.addEvent

var FightingBots = (r1, r2) => {
    DOM = require("./DOMHandler");
    // robot1 = r1;
    // robot2 = r2;
    robots.attack = true;
    // DOM.display(robot1);
    // DOM.display(robot2);
    // DOM.addAtkBtn();
    $("#playerOneAttack").click(whosTurnIsItAnyway);
    $("#playerTwoAttack").click(whosTurnIsItAnyway);
};

var whosTurnIsItAnyway = (robot1, robot2) => {
    if (robot1.attack) {
        damagesIncurred(robot1, robot2);
        robot1.attack = false;
    } else {
        damagesIncurred(robot2, robot1);
        robot1.attack = true;
    }
};

var getRandomDamage = (robot) => {
    var max = robots.maxDam;
    var min = robots.minDam;
    return RNG()
};

// console.log('grd', getRandomDamage)


var damagesIncurred = (attacker, defender) => {

    var damageDone = getRandomDamage(attacker) + attacker;
    if (didItGetHit(defender)) {
        defender.Health -= damageDone;
        // DOM.battleMessage(attacker, defender, damageDone);
        // DOM.display(defender);
    }
    // } else DOM.missMessage(attacker);
    if (defender.Health <= 0) {
        // $("#outputArea").html(`<div id="gameover"> GAME OVER ${attacker.name} wins!</div>`);
    }
    console.log(damageDone)
};

var didItGetHit = (defender) => {
    if (RNG() * 100 > defender) {
        return true;
    } else return false;
};


return FightingBots()
return whosTurnIsItAnyway()
return getRandomDamage()
return damagesIncurred()
return didItGetHit()

console.log("hello", FightingBots)

module.exports = {
    FightingBots, whosTurnIsItAnyway, getRandomDamage, damagesIncurred, didItGetHit
};