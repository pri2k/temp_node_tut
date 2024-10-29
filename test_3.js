// Modules

const names = require('./test_3_names')
const sayHi = require('./test_3_utils')

console.log(names)

sayHi(`Susan`)
sayHi(names.john)
sayHi(names.peter)