'use strict';

function RandomAttack(attackMax, attackMin) {

    let randomAttack = Math.floor(Math.random() * (attackMax - attackMin + 1)) + attackMin;
    return randomAttack;
}

module.exports {
    RandomAttack
};