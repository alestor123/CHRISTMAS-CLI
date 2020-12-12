#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
pck = require('./package.json'),
christmasDate = new Date(`Dec 26`).toJSON().slice(5,10),
newyearDate = new Date('Jan 2').toJSON().slice(5,10),
now = new Date().toJSON().slice(5,10),
chalk = require('chalk'); 
if(now===christmasDate){
    wish('Merry Christmas')
}
else if(newyearDate===now){
    wish('Happy New Year')
}
else{
    figlet('Christmas Is Coming Soon : )', (err, data) => {
        if (err) throw err     
        console.log(chalk.red.bgWhite.bold(data))
})}
function wish(wishes){
    figlet(wishes, (err, data) => {
        if (err) throw err     
        console.log(chalk.bgWhite.bold(Box('90x10',{text: chalk.green(data+`\n By ${process.argv[2]||pck.author||'alestor123' }`)}).toString()))})
}