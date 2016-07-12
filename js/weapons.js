'use strict';

var RNG = require("./randomNum");


function Attack(min, max) {
    this.minDamage = min;
    this.maxDamage = max;
}
///////*****Patron Attacks*****\\\\\\\

function FlattenedBallOfMeat() {
    this.name = "Flattened_Ball_Of_Meat";
}
FlattenedBallOfMeat.prototype = new Attack(3, 12);

function FishBall() {
    this.name = "Fish_Ball";
}
FishBall.prototype = new Attack(2, 3);

function RattlesnakeHead() {
    this.name = "Rattlesnake_Head";
}
RattlesnakeHead.prototype = new Attack(3, 4);

function SomethingShiny() {
    this.name = "Something_Shiny";
}
SomethingShiny.prototype = new Attack(3, 10);

function DeadFish() {
    this.name = "Dead_Fish";
}
DeadFish.prototype = new Attack(3, 5);

function Tofu() {
    this.name = "Tofu";
}
Tofu.prototype = new Attack(3, 9);

////