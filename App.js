#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
pck = require('./package.json'),
christmasDate = new Date(`Dec 25, ${new Date().getFullYear()} 24:00:00`).toJSON().slice(0,10),
chalk = require('chalk'); 
if(new Date().toJSON().slice(0,10)===christmasDate){
    figlet('Merry Christmas!!', (err, data) => {
        if (err) throw err     
        console.log(chalk.bgWhite.bold(Box('90x10',{text: chalk.green(data+`\n By ${process.argv[2]||pck.author||'alestor123' }`)}).toString()))})
}
else{
    figlet('Christmas Is Comming Soon : )', (err, data) => {
        if (err) throw err     
        console.log(chalk.red.bgWhite.bold(data))
})}
