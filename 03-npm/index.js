const logEvent = require('./logEvents')

const EventEmmitter = require('events')

class MyEmitter extends EventEmmitter {}

// initialize object
const myEmitter = new MyEmitter()

// add listener
myEmitter.on('log', (msg) => logEvent(msg))

setTimeout(()=> {
    // emit event
    myEmitter.emit('log', 'Log event emitted')
}, 2000)