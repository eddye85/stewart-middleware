const Stewart = require("stewart")
const Quaternion = require('quaternion');

const platform = new Stewart
platform.initHexagonal();

platform.update([0, 0, 0], Quaternion.ONE);

console.log(platform.getServoAngles())