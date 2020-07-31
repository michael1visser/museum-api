
const bodyParser = require('body-parser')
const { get } = require('./routes/routesIndex')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use('/docs', express.static('doc'))

app.use(bodyParser.json())
app.use(require('./routes/routesIndex'))


app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"), () => {
  console.log(`Beuller...PORT: ${app.get("port")}`)
})