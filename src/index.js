const Stewart = require("stewart")
const Quaternion = require('quaternion');

var rad = Math.PI / 180

const platform = new Stewart
platform.initHexagonal({rodLength:150, hornLength:40})

platform.update([0, 0, 39], Quaternion.ONE);

const unfixedAngles = platform.getServoAngles()

const fixedAngles = unfixedAngles.map(value => value ? value * 100 : value)

console.log(fixedAngles)
//console.log(platform)