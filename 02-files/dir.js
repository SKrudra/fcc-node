const fs = require('fs')


if (!fs.existsSync('./new')) {
    fs.mkdir('./new', err => {
        if (err) throw err;
        console.log('directry created')
    })
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', err => {
        if (err) throw err;
        console.log('directry removed')
    })
}