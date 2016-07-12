'use strict';


var main = require('./main');
var robots = require('./robots');
var weapons = require('./weapons');
const $ = require('jQuery');

$("#playerOneAttack").click(function() {
    console.log("p1", this.value)
})
$("#playerTwoAttack").click(function() {
    console.log("p2", this.value)
})

$("#playerOneRobots").change(function() {
    $("#outputAreaOne").html(`<div>${this.value}</div`);
    console.log("player one's robot is : ", this.value)
})
$("#playerTwoRobots").change(function() {
    $("#outputAreaTwo").html(`<div>${this.value}</div>`);
    console.log("player two's robot is : ", this.value)
})