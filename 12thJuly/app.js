const calci = require('./operations')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!' + `calci add ${calci.add(5, 5)}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(`calci add ${calci.add(5, 5)}`)
})