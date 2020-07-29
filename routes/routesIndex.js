const express = require('express')

const router = express.Router()

router.use(require('./objectRoutes'))
router.use(require('./artistRoutes'))

module.exports = router