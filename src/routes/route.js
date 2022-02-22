//let obj = require('./logger.js')
let obj1 = require('../logger/logger.js')
let obj2 = require('../until/helper.js')
let obj3 = require('../validator/formatter.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj1.log('thorium')
    console.log(obj.url)
    obj1.welcome('welcome')
    obj2.trim()
    obj3.convert()
    res.send('My first ever api!')
});

router.get('/bye', function (req, res) {
    
console.log(_.chunk(['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'], 4));
console.log(_.tail([1,3,5,7,9,11,13,17,19,21]))


console.log(_.fromPairs([["horror","The shining"],["thiller","shutterisland"],["Fantasy","parisLabrynth"]]))

  res.send('My firvzxx m !')
});

module.exports = router;