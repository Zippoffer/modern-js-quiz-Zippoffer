'use strict';

// var DOM = require("./DOMHandler");
let RNG = require("./randomNum");
let robots = require('./robots');
const $ = require('jQuery');
let weapons = require('./weapons');
// console.log(robots);
///////////////////

let robot1;
let robot2;

$('#playerOneAttack').click(function() {
    console.log("you clicked playerOneAttack")
})
$('#playerTwoAttack').click(function() {
    console.log("you clicked playerTwoAttack")
})




// var FightingBots = (r1, r2) => {
//     DOM = require("./DOMHandler");
//     robot1 = r1;
//     robot2 = r2;
//     robot1.attackingNow = true;
//     DOM.display(robot1);
//     DOM.display(robot2);
//     DOM.addAtkBtn();
//     $("#playerOneAttack").click(turnFinder);
//     $("#playerTwoAttack").click(turnFinder);
// };

var turnFinder = () => {
    if (robot1.attackingNow) {
        damageCalculation(robot1, robot2);
        robot1.attackingNow = false;
    } else {
        damageCalculation(robot2, robot1);
        robot1.attackingNow = true;
    }
};


var getRandomDamage = (robot) => {
    $('#playerOneAttack').click(function() {
        var max = robots.maxDam;
        var min = robots.minDam;
        return RNG();
    });
    console.log('attack1', robots.maxdam)
    // console.log('you clicked me')
    // console.log('grd', getRandomDamage)
};


var damageCalculation = (attacker, defender) => {
    $('#playerOneAttack').click(function() {


        var damageDone = getRandomDamage(attacker) + attacker.modification.damageBonus;
        if (checkHit(defender)) {
            defender.HP -= damageDone;
            DOM.battleMessage(attacker, defender, damageDone);
            DOM.display(defender);
        } else DOM.missMessage(attacker);

        if (defender.HP <= 0) {
            $("#outputArea").html(`<div id="gameover"> GAME OVER ${attacker.name} wins!</div>`);
        }
    });
    console.log(damageDone)
};

var checkHit = (defender) => {
    if (Math.random() * 100 > defender.modification.evasion) {
        return true;
    } else return false;
};

return getRandomDamage();

module.exports = {
    turnFinder, getRandomDamage, damageCalculation, checkHit
};