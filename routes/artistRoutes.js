const express = require('express')
const artistController =  require('../controllers/artistController')

const router = express.Router()


router.get('/artists', artistController.index)

router.get('/artists/name/:name', artistController.searchName)

router.get('/artists/:resource/:attribute', artistController.showArtists)

router.post('/artists', artistController.addArtist)

router.put('/artists/:id', artistController.updateArtist)

router.delete('/artists/:id', artistController.deleteArtist)

module.exports = router 