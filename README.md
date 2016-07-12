# MJD - Boilerplate

1. `git clone` this dir
1. run `mv mjd-boilerplate <your proj name here>`
1. cd into your project
1. run `npm install`
1. open 2 terminal tabs, run `gulp` in the first, and `http-server` in the second

## You're all set, jasmine tests will display inline with your gulp lint in terminal
Instructions

Code/Tools Requirements

Use ES6 language features wherever you can. At a minimum, you should be using let, const, fat arrows, property shorthand, method properties, and string templates.
Have a Gulp task running at all times to validate your JavaScript. We will be validating your project and we should see 0 errors.
You must have a test suite that validates the core logic of the application.
You must use jQuery for interacting with the DOM.
Base Logical Requirements

You'll be building robots to battle each other.

A base Robot function.
Define three robot type functions (e.g. Drone, Bipedal, ATV).
Define at least 2 specific robot model functions for each type.
Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the Math.random() function in JavaScript.
Give each robot model a different range of damage they do using the same technique.
Base Functional Requirements

When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
Once either robot's health is <0 display a message that the battle is over, and which one won. For example...
The Viper Drone defeated the Behemoth ATV with its flamethrower.

Bonus Goals

Bonus Logical Requirements

These are completely optional, once you have the basic requirements met and want to practice object composition.

Define at least six different modifications and six different weapons that can be added to a robot.
Each modification should provide some combination of the following benefits - increased protection, increased damage, or evasion capability (ability to avoid some attacks).
Define the range of damage that each weapon can do.
Bonus Functional Requirements

If you have completed the base requirements, and want to explore object composition more, you may choose to implement these requirements. They are completely optional.

When your user interface first loads, provide the user with buttons so that one specific robot model can be chosen as Player 1.
Once the user selects a robot model for Player 1, show a button for each weapon that can be added to the robot.
Once the user selects a weapon for Player 1, show a button for each modification that can be added to the robot.
Once Player 1 has a modification, provide the user with buttons so that one specific robot model can be chosen as Player 2.
Once the user selects a robot model for Player 2, show a button for each weapon that can be added to the robot.
Once the user selects a weapon for Player 2, show a button for each modification that can be added to the robot.
Once the modification for Player 2 is chosen, the battle begins.
Each round of battle should determine the amount of damage each robot will do with its weapon.
That damage should then be adjusted based on the modifications that it has, and what its opponent has.
Rounds continue until one of the robots has 0, or less than 0, health.
When the battle is over display the outcome to the user. For example...
The Viper Drone defeated the Behemoth ATV with its flamethrower.