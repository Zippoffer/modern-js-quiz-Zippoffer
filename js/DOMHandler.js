'use strict';

var $ = require('jQuery');
let main = require('./main');
let robots = require('./robots')

let playerOne = null;
let playerTwo = null;



const calcDmg = function(playerOne, playerTwo) {
    playerTwo.Health -= playerOne.Damage;
    return playerTwo.Health;
};
// console.log("Damages", playerTwo.Health)

// playerOne.Health = (playerOne.Health - playerTwo.Damage);
// console.log("p1H", playerOne.Health)
// // players[1].Health = (players[1].Health - players[0].Damage);
// // players[0].Health = (players[0].Health - players[1].Damage);
// playerTwo.Health = (playerTwo.Health - playerOne.Damage);
// console.log("p2H", playerTwo.Health)

const Attack1 = (playerOne, playerTwo) => {

    calcDmg(playerOne, playerTwo);
    if (playerTwo.Health <= 0) {
        $('#outputAreaOne').empty().prepend(`<h4><strong>${playerTwo.name}</strong> has been slain!</h4>`);
    } else {
        $('#outputAreaOne').append(`<p><strong>${playerTwo.name}</strong>: has ${playerTwo.Health} left.</p>`);
    }
};

const Attack2 = (playerTwo, playerOne) => {
    calcDmg(playerTwo, playerOne);
    if (playerOne.Health <= 0) {
        $('#outputAreaOne').empty().prepend(`<h4><strong>${playerOne.name}</strong> has been slain!</h4>`);
    } else {
        $('#outputAreaOne').append(`<p><strong>${playerOne.name}</strong>: has ${playerOne.Health} left.</p>`);
    }
};


///////////////**********console logging the player attacks*************\\\\\\\\\\\\\\\\\\\
$("#playerOneAttack").click(function() {


    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();
    // let playerOne = new robots[robotType1]();
    // let playerTwo = new robots[robotType2]();
    // console.log("playerOne", playerOne)

    Attack1(playerOne, playerTwo);
    // Attack2(playerTwo, playerOne);
    // calcDmg(playerOne, playerTwo);
    calcDmg(playerTwo.Health - playerOne.Damage);
    $("#outputAreaOne").append(`<div>${playerOneInput.value} the ${playerOneRobots.value} attack caused ${playerOne.Damage} damage</div>`)

})






$("#playerTwoAttack").click(function() {

    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();
    // let playerOne = new robots[robotType1]();
    // let playerTwo = new robots[robotType2]();

    // Attack1(playerOne, playerTwo);
    Attack2(playerTwo, playerOne);
    calcDmg(playerOne, playerTwo);

    // $("#outputAreaTwo").append(`<div>${playerTwoInput.value} the ${playerTwoRobots.value} attack caused ${playerTwo.Damage} damage</div>`)

})






//////////////**************printing the players robot choice in the DOM*************\\\\\\\\\\\\\\\\\\\
$("#playerOneRobots").change(function() {
    if (playerOne === null) {
        for (let i = 0; i < robots.GoBotClassArray.length; i++) {
            if ($("#playerOneRobots").val() === robots.GoBotClassArray[i].name) {
                playerOne = robots.GoBotClassArray[i];
                console.log("playerOne", playerOne)
            }
        }
    }
    // $("#outputAreaOne").append(`<div>${this.value}</div`);
    // console.log("player one's robot is : ", this.value)
});
$("#playerTwoRobots").change(function() {
    if (playerTwo === null) {
        for (let i = 0; i < robots.DevilBotClassArray.length; i++) {
            if ($("#playerTwoRobots").val() === robots.DevilBotClassArray[i].name) {
                playerTwo = robots.DevilBotClassArray[i];
                console.log("playerTwo", playerTwo)
            }
        }
    }
    // $("#outputAreaTwo").append(`<div>${this.value}</div>`);
    // console.log("player two's robot is : ", this.value)
})



/////////////************printing the players name in the DOM**************\\\\\\\\\\\\\\\\\\
$("#playerOneInput").keyup(function() {
    // $("#outputAreaOne").html(`<div>${this.value}</div>`)
})


$("#playerTwoInput").keyup(function() {
    // $("#outputAreaTwo").html(`<div>${this.value}</div>`)
})

module.exports = {
    calcDmg, Attack1, Attack2
};


//////