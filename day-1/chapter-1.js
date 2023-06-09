const os = require('os')
const path = require('path')
// const math = require('./math')
const {add, sub, mult, div} = require('./math')


console.log("Hello World!")
// global object
// console.log(global)

console.log(os.type())
console.log(os.version())
console.log(os.homedir())


console.log(__dirname)
console.log(__filename)


console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))


// console.log(math.add(2, 2))
console.log(add(2, 2))
console.log(sub(2, 2))
console.log(mult(2, 2))
console.log(div(2, 2))