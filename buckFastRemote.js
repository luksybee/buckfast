const https = require('https')
const options = {
    hostname: 'tests.radically.digital',
    path: '/json/buckfast/buckfast-version-2-simple.json',
    method: 'GET'
}

const req = https.request(options, res => {
    // console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        let { series } = JSON.parse(d)
        // console.log(series);
        series.forEach(i => {
            if (i % 15 === 0) {
                console.log('buckfast');
            } else if (i % 5 === 0) {
                console.log('fast');
            } else if (i % 3 === 0) {
                console.log('buck');
            } else {
                console.log(i);
            }
        });
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()