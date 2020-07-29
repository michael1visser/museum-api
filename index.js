const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.use(require('./routes/routesIndex'))

app.listen(4000, () =>{
    console.log("Beuler...?")
})