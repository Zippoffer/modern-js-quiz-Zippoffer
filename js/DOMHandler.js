'use strict';

var $ = require('jQuery');
// let main = require('./main');
let robots = require('./robots');

let playerOne = null;
let playerTwo = null;



const calcDmg = function(playerOne, playerTwo) {
    playerTwo.Health -= playerOne.Damage;
    return playerTwo.Health;
};

const Attack1 = (playerOne, playerTwo) => {

    calcDmg(playerOne, playerTwo);
    if (playerTwo.Health <= 0) {
        $('#outputAreaOne').empty().prepend(`<h4><strong>${playerTwo.name}</strong> has been slain!</h4>`);
    } else {
        $('#outputAreaOne').append(`<p><strong>${playerTwo.name}</strong>: has ${playerTwo.Health} health left.</p>`);
        $("#outputAreaOne").append(`<div>${$("playerOneInput").val()} the ${$("playerOneRobots").val()} attack caused ${playerOne.Damage} damage</div>`);
    }
};

const Attack2 = (playerTwo, playerOne) => {
    calcDmg(playerTwo, playerOne);
    if (playerOne.Health <= 0) {
        $('#outputAreaTwo').empty().prepend(`<h4><strong>${playerOne.name}</strong> has been slain!</h4>`);
    } else {
        $('#outputAreaTwo').append(`<p><strong>${playerOne.name}</strong>: has ${playerOne.Health} health left.</p>`);
        $("#outputAreaTwo").append(`<div>${$("#playerTwoInput").val()} the ${$("playerTwoRobots").val()} attack caused ${playerTwo.Damage} damage</div>`);
    }
};


///////////////**********console logging the player attacks*************\\\\\\\\\\\\\\\\\\\
$("#playerOneAttack").click(function() {


    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();

    Attack1(playerOne, playerTwo);
    calcDmg(playerOne, playerTwo);


});






$("#playerTwoAttack").click(function() {

    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();

    Attack2(playerTwo, playerOne);
    calcDmg(playerOne, playerTwo);


});






//////////////**************printing the players robot choice in the DOM*************\\\\\\\\\\\\\\\\\\\
$("#playerOneRobots").change(function() {
    if (playerOne === null) {
        for (let i = 0; i < robots.GoBotClassArray.length; i++) {
            if ($("#playerOneRobots").val() === robots.GoBotClassArray[i].name) {
                playerOne = robots.GoBotClassArray[i];
                console.log("playerOne", playerOne);
            }
        }
    }
});


$("#playerTwoRobots").change(function() {
    if (playerTwo === null) {
        for (let i = 0; i < robots.DevilBotClassArray.length; i++) {
            if ($("#playerTwoRobots").val() === robots.DevilBotClassArray[i].name) {
                playerTwo = robots.DevilBotClassArray[i];
                console.log("playerTwo", playerTwo);
            }
        }
    }
});



/////////////************printing the players name in the DOM**************\\\\\\\\\\\\\\\\\\
$("#playerOneInput").keyup(function() {

});


$("#playerTwoInput").keyup(function() {

});

module.exports = {
    calcDmg, Attack1, Attack2
};


//////