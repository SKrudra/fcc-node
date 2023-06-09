const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// with toString
fs.readFile('./files/shorter.txt', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data.toString())
})

// above will be executed later
console.log('Hello....')

// with encoding
fs.readFile('./files/shorter.txt', 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})


/* with path */
fs.readFile(path.join(__dirname, 'files', 'shorter.txt'), 'utf8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
})


// callback hell!
// wirte to file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to see you.', (err) => {
    if (err) {
        throw err
    }
    console.log('write is complete')
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' How is the work?', (err) => {
        if (err) {
            throw err
        }
        console.log('append is complete')
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
            if (err) {
                throw err
            }
            console.log('Rename is complete')
        })
    })
})

// append file
fs.appendFile(path.join(__dirname, 'files', 'test.txt'), ' How are you doing?', (err) => {
    if (err) {
        throw err
    }
    console.log('append is complete')
})

// handing uncaught errors; exit
process.on('uncaughtException', err => {
    console.log(`There was an uncaught erro: ${err}`)
    process.exit(1);
})


/* Promises */
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'shorter.txt'), 'utf8');
        console.log('Promise: ', data);
        // delete file
        // await fsPromises.unlink(path.join(__dirname, 'files', 'shorter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), ' Nice to see you!');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseRename.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseRename.txt'), 'utf8');
        console.log('Promise Completed: ', newData);
    } catch (error) {
        console.error(error)
    }
}

fileOps();