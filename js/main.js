'use strict';

let DOM = require("./DOMHandler");
let RNG = require("./randomNum");
let robots = require('./robots');
const $ = require('jQuery');
let weapons = require('./weapons');
// console.log(robots);
///////////////////

let robot1 = new robots.GoBot();
let robot2 = new robots.DevilBot();



////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

const calcDmg = function(playerOne, playerTwo) {
    playerTwo.Health -= playerOne.Damage;
    return playerTwo;
};
calcDmg(robot1, robot2);
console.log(calcDmg(robot1, robot2));



const moreDmg = function(playerTwo, playerOne) {
    playerOne.Health -= playerTwo.Damage;
    return playerOne;
}
moreDmg(robot2, robot1);
console.log(moreDmg(robot2, robot1));


console.log("robot1 damage is : ", robot1.Damage)
console.log("robot2 damage is : ", robot2.Damage)


module.exports = {
    calcDmg, moreDmg
};