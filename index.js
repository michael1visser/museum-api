const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.use(require('./routes/routesIndex'))
//app.use(require('./routes/artistRoutes'))

app.listen(4000, () =>{
    console.log("Beuler...?")
})