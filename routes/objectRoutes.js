const express = require('express')
const objectController =  require('../controllers/objectController')


const router = express.Router()

router.get('/', (req, resp)=>{
    resp.redirect('/objects')
})

router.get('/objects', objectController.index)
router.get('/objects/public', objectController.isPublic)
router.get('/objects/featured', objectController.isFeatured)

router.get('/objects/:resource', objectController.showAllX)

router.get('/objects/:resource/:name', objectController.showXObjects)

router.post('/objects', objectController.addObject)

router.put('/objects/:id', objectController.updateObject)

router.delete('/objects/:id', objectController.deleteObject)

module.exports = router