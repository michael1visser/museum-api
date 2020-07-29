const express = require('express')
const objectController =  require('../controllers/objectController')
const { showXObjects } = require('../controllers/objectController')

const router = express.Router()

router.get('/', (req, resp)=>{
    resp.redirect('/objects')
})

router.get('/objects', objectController.index)
router.get('/objects/public', objectController.isPublic)
router.get('/objects/featured', objectController.isFeatured)

router.get('/:resource', objectController.showAllX)

router.get('/:resource/:name', objectController.showXObjects)

router.post('/objects', objectController.addObject)

module.exports = router