const express = require('express')
const artistController =  require('../controllers/artistController')

const router = express.Router()


router.get('/artists', artistController.index)
/**
 * @api {get} /artists Show all artists
 * @apiName show
 * @apiGroup Artists
 */

router.get('/artists/name/:name', artistController.searchName)
/**
 * @api {get} /artists/name/:name Search artists by name.
 * @apiName searchByName
 * @apiGroup Artists
 * @apiParam {string} name The name or partial name of the artist (case insensitive).
 * @apiSuccess {json} All API returns all matching objects in json format.
 * @apiSuccessExample  Sample URL: http://domain/artists/name/mike
 * Success Response: 
 * {
    "_id": "5f21dbc5f11c0750d1fedd1b",
    "name": "Mike Visser",
    "bio": "Just the Best y'all.",
    "nationality": "American",
    "birthDate": "1983-03-22T00:00:00.000Z",
    "gender": "Male",
    "wikiUrl": "",
    "UlanUrl": "",
    "__v": 0
  }
 */

router.get('/artists/:field/:query', artistController.showArtists)
/**
 * @api {get} /artists/:field/:query Show artists that match a field query.
 * @apiName searchByField
 * @apiGroup Artists
 * @apiParam {string} field The name of the field to be searched
 * @apiParam {string} query The field option to isolate.
 * @apiSuccess {json} All API returns all matching objects in json format.
 * @apiSuccessExample  Sample URL: http://domain/artists/nationality/American
 * Success Response: 
 * {
    "_id": "5f21b4df830211fe7916a251",
    "name": "Reginald Marsh",
    "bio": "American, Paris 1898–1954 Dorset, Vermont",
    "nationality": "American",
    "birthDate": "1898-01-01T00:00:00.000Z",
    "deathDate": "1954-01-01T00:00:00.000Z",
    "gender": "",
    "wikiUrl": "https://www.wikidata.org/wiki/Q7308806",
    "UlanUrl": "http://vocab.getty.edu/page/ulan/500016727",
    "__v": 0
  },
  {
    "_id": "5f21b4df830211fe7916a250",
    "name": "Meyer Woolens, Inc.",
    "bio": "",
    "nationality": "American",
    "birthDate": null,
    "deathDate": null,
    "gender": "",
    "wikiUrl": "",
    "UlanUrl": "",
    "__v": 0
  },
  ...
 */

router.post('/artists', artistController.addArtist)
/**
 * @api {post} /artists Add a new artist.
 * @apiName add
 * @apiGroup Artists
 * @apiSuccess {json} All API returns successfully posted information.
 * @apiSuccessExample  Sample URL: http://domain/artists
 * Request Body:
 * {
    "name": "Mike Visser",
    "bio": "Just the Best y'all.",
    "nationality": "American",
    "birthDate": "1983-03-22T00:00:00.000Z",
    "gender": "Male"
  }
 * 
 * Success Response: 
 * {
    "_id": "5f21dbc5f11c0750d1fedd1b",
    "name": "Mike Visser",
    "bio": "Just the Best y'all.",
    "nationality": "American",
    "birthDate": "1983-03-22T00:00:00.000Z",
    "gender": "Male",
    "__v": 0
  }
 */

router.put('/artists/:id', artistController.updateArtist)
/**
 * @api {put} /artists/:id Update an existing artist.
 * @apiName update
 * @apiGroup Artists
 * @apiParam {string} id The database id of the artist to update.
 * @apiSuccess {json} All API returns updated artist object.
 * @apiSuccessExample  Sample URL: http://domain/artist/5f21dbc5f11c0750d1fedd1b
 * Request Body:
 * {
 * "bio": "Just the Best y'all. No really, the best!"
 * }
 * 
 * Success Response: 
 * {
    "_id": "5f21dbc5f11c0750d1fedd1b",
    "name": "Mike Visser",
    "bio": "Just the Best y'all. No really, the best!",
    "nationality": "American",
    "birthDate": "1983-03-22T00:00:00.000Z",
    "gender": "Male",
    "wikiUrl": "",
    "UlanUrl": "",
    "__v": 0
  }
 */

router.delete('/artists/:id', artistController.deleteArtist)
/**
 * @api {delete} /artists/:id Delete an artist.
 * @apiName delete
 * @apiGroup Artists
 * @apiParam {string} id The database ID of the artist to delete
 * @apiSuccess {json} All API returns the deleted artist
 * @apiSuccessExample  Sample URL: http://domain/artists/5f21dbc5f11c0750d1fedd1b
 * Success Response: 
 * {
    "_id": "5f21dbc5f11c0750d1fedd1b",
    "name": "Mike Visser",
    "bio": "Just the Best y'all. No really, the best!",
    "nationality": "American",
    "birthDate": "1983-03-22T00:00:00.000Z",
    "gender": "Male",
    "wikiUrl": "",
    "UlanUrl": "",
    "__v": 0
  }
 */

module.exports = router 