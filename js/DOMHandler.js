'use strict';


var main = require('./main');
var robots = require('./robots');
var weapons = require('./weapons');
const $ = require('jQuery');

const calcDmg = function(playerOne, playerTwo) {
    playerTwo.Health -= playerOne.Damage;
    return playerTwo;

};

const Attack1 = (playerOne, playerTwo) => {

    calcDmg(playerOne, playerTwo);
    if (playerTwo.Health <= 0) $('#outputAreaOne').empty().prepend(`<h4><strong>${playerTwo.name}</strong> has been slain!</h4>`);
    else $('#outputAreaOne').append(`<p><strong>${playerTwo.name}</strong>: has ${playerTwo.Health} left.</p>`);
};

const Attack2 = (playerTwo, playerOne) => {
    calcDmg(playerTwo, playerOne);
    if (playerOne.Health <= 0) $('#outputAreaOne').empty().prepend(`<h4><strong>${playerOne.name}</strong> has been slain!</h4>`);
    else $('#outputAreaOne').append(`<p><strong>${playerOne.name}</strong>: has ${playerOne.Health} left.</p>`);
};

///////////////**********console logging the player attacks*************\\\\\\\\\\\\\\\\\\\
$("#playerOneAttack").click(function() {

    console.log("this again", calcDmg.value)
    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();
    let playerOne = new robots[robotType1]();
    let playerTwo = new robots[robotType2]();
    // console.log("playerOne", playerOne)

    Attack1(playerOne, playerTwo);
    // Attack2(playerTwo, playerOne);

    $("#outputAreaOne").append(`<div>${playerOneInput.value} the ${playerOneRobots.value} attack caused ${playerOne.Damage} damage</div>`)
    console.log("p1", this.value)
})






$("#playerTwoAttack").click(function() {

    let robotType1 = $("#playerOneRobots").val();
    let robotType2 = $("#playerTwoRobots").val();
    let playerOne = new robots[robotType1]();
    let playerTwo = new robots[robotType2]();

    // Attack1(playerOne, playerTwo);
    Attack2(playerTwo, playerOne);

    $("#outputAreaTwo").append(`<div>${playerTwoInput.value} the ${playerTwoRobots.value} attack caused ${playerTwo.Damage} damage</div>`)
    console.log("p2", this.value)
})






//////////////**************printing the players robot choice in the DOM*************\\\\\\\\\\\\\\\\\\\
$("#playerOneRobots").change(function() {
    // $("#outputAreaOne").append(`<div>${this.value}</div`);
    console.log("player one's robot is : ", this.value)
})
$("#playerTwoRobots").change(function() {
    // $("#outputAreaTwo").append(`<div>${this.value}</div>`);
    console.log("player two's robot is : ", this.value)
})



/////////////************printing the players name in the DOM**************\\\\\\\\\\\\\\\\\\
$("#playerOneInput").keyup(function() {
    // $("#outputAreaOne").html(`<div>${this.value}</div>`)
})


$("#playerTwoInput").keyup(function() {
    // $("#outputAreaTwo").html(`<div>${this.value}</div>`)
})