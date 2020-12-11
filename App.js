#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
pck = require('./package.json'),
christmasDate = new Date(`Dec 25, ${new Date().getFullYear()} 00:00:00`).getTime(),
chalk = require('chalk'); 
figlet('Merry Christmas!!', (err, data) => {
if (err) throw err     
console.log(Box('90x10',{text: chalk.green(data+`\n By ${process.argv[2]||pck.author||'alestor123' }`)}).toString())})