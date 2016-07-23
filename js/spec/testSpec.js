'use strict';
const robots = require('../robots');
const weapons = require('../weapons');
const RNG = require('../randomNum');

describe('robot function', function() {
    it('should define robot', function() {
        expect(robots.Robot).toBeDefined();
        expect(robots.GoBot).toBeDefined();
        expect(robots.DevilBot).toBeDefined();

    });
});

describe('types of robots', function() {

    it('MotoBot should be a type of GoBot', function() {
        expect(robots.MotoBot).toBeDefined();
    });
    it('TankBot should be a type of GoBot', function() {
        expect(robots.TankBot).toBeDefined();
    });
    it('BlenderBot should be a type of GoBot', function() {
        expect(robots.BlenderBot).toBeDefined();
    });
    it('RabbitBot should be a type of DevilBot', function() {
        expect(robots.RabbitBot).toBeDefined();
    });
    it('KittenBot should be a type of DevilBot', function() {
        expect(robots.KittenBot).toBeDefined();
    });
    it('PuppyBot should be a type of DevilBot', function() {
        expect(robots.PuppyBot).toBeDefined();
    });

});

describe('random number generator', function() {
    it('random number generator should generate random numbers', function() {
        expect(RNG()).toEqual(jasmine.any(Number));
    });
});








// describe('weapons function', function () {
// 	it('should define weapons', function() {

// 	})
// })

// describe("The specification for basic math", function() {

//     it("should have an add function", function() {
//         expect(add).toBeDefined();
//     });