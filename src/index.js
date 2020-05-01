const Stewart = require("./stewart")
const Quaternion = require('quaternion');

var rad = Math.PI / 180

platform = new Stewart
platform.initHexagonal()

platform.update([0, 0, 0], Quaternion.ONE)
platform.update([0, 0, 0], Quaternion.ONE)
console.log(Quaternion.ONE)

const unfixedAngles = platform.getServoAngles()

const fixedAngles = unfixedAngles.map(value => value ? value * (180/Math.PI) : value)

console.log(fixedAngles)
//console.log(platform)