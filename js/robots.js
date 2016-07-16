// A base Robot function.
// Define three robot type functions (e.g. Drone, Bipedal, ATV).
// Define at least 2 specific robot model functions for each type.
// Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
// Give each robot model a different range of damage they do using the same technique.


'use strict';

let RNG = require("./randomNum");
let GUN = require("./randomAttack");

function Robot() {
    this.Health = null;
    this.attack = null;
    this.name = null;
}



function GoBot(minRobotHealth, maxRobotHealth, minDamage, maxDamage) {
    this.minHealth = minRobotHealth;
    this.maxHealth = maxRobotHealth;
    this.minDam = minDamage;
    this.maxDam = maxDamage;
    this.goBot = true;
    this.Damage = GUN(this.minDam, this.maxDam);
    this.Health = RNG(this.minHealth, this.maxHealth);
    // console.log("GOBOThealth", this.Health)
    // console.log("GOBOTdamage", this.Damage)
}
GoBot.prototype = new Robot();


function DevilBot(minRobotHealth, maxRobotHealth, minDamage, maxDamage) {
    this.minHealth = minRobotHealth;
    this.maxHealth = maxRobotHealth;
    this.minDam = minDamage;
    this.maxDam = maxDamage;
    this.devilBot = true;
    this.Damage = GUN(this.minDam, this.maxDam);
    this.Health = RNG(this.minHealth, this.maxHealth);
    // console.log("DEVILhealth", this.Health)
    // console.log("DEVILdamage", this.Damage)
}
DevilBot.prototype = new Robot();

////////////////******GoBots******\\\\\\\\\\\\\\\\\

function MotoBot(minRobotHealth, maxRobotHealth, minDamage, maxDamage) {
    this.name = "Moto_Bot";
    this.attack = null;
    // console.log("MotoBot", this.Health)
    // console.log("MotoAttack", this.Damage)
}
MotoBot.prototype = new GoBot(5, 89);

function TankBot(minRobotHealth, maxRobotHealth) {
    this.name = "Tank_Bot";
    this.attack = null;
    // console.log("TankBot", this.Health)
    // console.log("TankAttack", this.Damage)
}
TankBot.prototype = new GoBot(85, 100);

function BlenderBot(minRobotHealth, maxRobotHealth) {
    this.name = "Blender_Bot";
    this.attack = null;
    // console.log("BlenderBot", this.Health)
    // console.log("BlenderAttack", this.Damage)
}
BlenderBot.prototype = new GoBot(85, 100);


let motoBot = new MotoBot();
let tankBot = new TankBot();
let blenderBot = new BlenderBot();


/////////*********DevilBots********\\\\\\\\\\\\

function RabbitBot(minRobotHealth, maxRobotHealth) {
    this.name = "Rabbit_Bot";
    this.attack = null;
    // console.log("RabbitBot", this.Health)
    // console.log("RabbitAttack", this.Damage)
}
RabbitBot.prototype = new DevilBot(80, 100);

function KittenBot(minRobotHealth, maxRobotHealth) {
    this.name = "Kitten_Bot";
    this.attack = null;
    // console.log("KittenBot", this.Health)
    // console.log("KittenAttack", this.Damage)
}
KittenBot.prototype = new DevilBot(80, 100);

function PuppyBot(minRobotHealth, maxRobotHealth) {
    this.name = "Puppy_Bot";
    this.attack = null;
    // console.log("PuppyBot", this.Health)
    // console.log("PuppyAttack", this.Damage)
}
PuppyBot.prototype = new DevilBot(80, 100);


let rabbitBot = new RabbitBot();
let kittenBot = new KittenBot();
let puppyBot = new PuppyBot();



//////******EXPORTS*******\\\\\\\
var GoBotClassArray = [motoBot, tankBot, blenderBot];
var DevilBotClassArray = [rabbitBot, kittenBot, puppyBot];

module.exports = {
    Robot, GoBot, DevilBot, MotoBot, TankBot, BlenderBot, RabbitBot, KittenBot, PuppyBot
};