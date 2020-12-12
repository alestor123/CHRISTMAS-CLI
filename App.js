#!/usr/bin/env node

var Box = require("cli-box"),
figlet = require('figlet'),
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
else if(now > christmasDate){
    wait('New Year Is Comming !!')
}
else{
    wait('Christmas Is Coming Soon : )')
}
function wish(wishes){
    figlet(wishes, (err, data) => {
        if (err) throw err     
        console.log(chalk.bgWhite.bold(Box('90x10',{text: chalk.green(data+`\n By ${process.argv[2]||'alestor123' }`)}).toString()))})
}
function wait(waitmsg){
    figlet(waitmsg, (err, data) => {
        if (err) throw err     
        console.log(chalk.red.bgWhite.bold(data))

})}