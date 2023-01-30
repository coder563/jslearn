const funcA = require('./funcA')

function funcB(){
    console.log('function b')
    funcA()
}


funcB()

module.exports = funcB