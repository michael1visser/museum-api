const express = require('express')
const objectController =  require('../controllers/objectController')


const router = express.Router()

router.get('/', (req, resp)=>{
    resp.redirect('/objects')
})

router.get('/objects', objectController.index)
/**
 * @api {get} /objects Show all objects
 * @apiName show
 * * @apiGroup Objects
 */

router.get('/objects/public', objectController.isPublic)
/**
 * @api {get} /objects/public Show all objects currently in the public domain
 * @apiName showPublic
 * * @apiGroup Objects
 * *@apiSuccess {json} all Json objects with public set to true
 */

router.get('/objects/featured', objectController.isFeatured)
/**
 * @api {get} /objects/featured Show featured objects
 * @apiName showFeatured
 * @apiGroup Objects
 *
 *
 * @apiSuccess {json} all all objects with featured currently set to true
 */

router.get('/objects/:field', objectController.showAllX)
/**
 * @api {get} /objects/:field Show a list of all possible options for the searched field. 
 * @apiName showList
 * @apiGroup Objects
 *@apiParam {string} field The object field you would like to query.
 * @apiSuccess {array} Queried_Field Array of possible options.
 * @apiSuccessExample  Sample URL: http://domain/objects/department
 * Success Response: 
 * [
  "Egyptian Art",
  "Greek and Roman Art",
  "Drawings and Prints",
  "Modern and Contemporary Art",
  "Islamic Art",
  "Arts of Africa, Oceania, and the Americas",
  "European Sculpture and Decorative Arts",
  "The American Wing",
  "Photographs",
  "Asian Art",
  "Costume Institute",
  "Robert Lehman Collection",
  "Arms and Armor",
  "Musical Instruments",
  "Medieval Art",
  "Ancient Near Eastern Art",
  "European Paintings",
  "The Cloisters",
  "Paintings"
]
 */

router.get('/objects/:field/:query', objectController.showXObjects)
/**
 * @api {get} /objects/:field/:query Show objects that match a field query.
 * @apiName searchByField
 * @apiGroup Objects
 *@apiParam {string} field The field you would like to search within.
 *@apiParam {string} query The option from the field options list you would like to isolate.
 * @apiSuccess {json} All objects which match the query.
 * @apiSuccessExample  Sample URL: http://domain/objects/department/photographs
 * Success Response: 
 * {
    "additionalImages": [
      
    ],
    "_id": "5f21b4de830211fe7916a0d0",
    "featured": "false",
    "yearAcquired": "1997",
    "isPublicDomain": false,
    "primaryImage": "",
    "primaryImageSmall": "",
    "department": "Photographs",
    "objectType": "Photograph",
    "title": "H.W. Reitz, Architect",
    "culture": "",
    "period": "",
    "artist": "Werner Mantz",
    "dateCreated": "1927",
    "medium": "Gelatin silver print",
    "dimensions": "23.5 x 17.5 cm (9 1/4 x 6 7/8 in. )",
    "country": "",
    "category": "Photographs",
    "rights": "© 2020 Artists Rights Society (ARS), New York",
    "infoLink": "",
    "__v": 0
  },
  ...
 */

router.post('/objects', objectController.addObject)
/**
 * @api {post} /objects/ Add a new Art object
 * @apiName add
 * @apiGroup Objects
 * @apiSuccess {json} All API will return the new object in json format.
 * @apiSuccessExample  Sample URL: http://domain/objects
 * Request Body:
 * {
	"featured" : "false",
	"yearAcquired" : "2020",
	"isPublicDomain" : false,
	"primaryImageSmall" : "",
	"department" : "Paintings",
	"objectType" : "Painting",
	"title" : "Mike's Test Painting",
	"artist" : "Mike Visser",
	"dateCreated" : "1936",
	"medium" : "Finger Paints",
	"dimensions" : "18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)",
	"category" : "Paintings",
	"rights" : "© Mike Visser"
    }

 * Success Response: 
 * {
	"_id" : ObjectId("5f21c8c3e096e928e1ccfd93"),
	"featured" : "false",
	"yearAcquired" : "2020",
	"isPublicDomain" : false,
	"primaryImageSmall" : "",
	"department" : "Paintings",
	"objectType" : "Painting",
	"title" : "Mike's Test Painting",
	"artist" : "Mike Visser",
	"dateCreated" : "1936",
	"medium" : "Finger Paints",
	"dimensions" : "18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)",
	"category" : "Paintings",
	"rights" : "© Mike Visser",
	"__v" : 0
}
 */

router.put('/objects/:id', objectController.updateObject)
/**
 * @api {put} /objects/:id Update an existing object
 * @apiName update
 * @apiGroup Objects
 *@apiParam {string} id The database ID of the object you are updating.
 * @apiSuccess {json} All API returns updated object in json format.
 * @apiSuccessExample  Sample URL: http://domain/objects/5f21c8c3e096e928e1ccfd93
 * Request Body:
 * {
 * "medium" : "Mud"
 * }
 * 
 * Success Response: 
 * {
	"_id" : ObjectId("5f21c8c3e096e928e1ccfd93"),
	"additionalImages" : [ ],
	"featured" : "false",
	"yearAcquired" : "2020",
	"isPublicDomain" : false,
	"primaryImage" : "",
	"primaryImageSmall" : "",
	"department" : "Paintings",
	"objectType" : "Painting",
	"title" : "Mike's Test Painting",
	"culture" : "",
	"period" : "",
	"artist" : "Mike Visser",
	"dateCreated" : "1936",
	"medium" : "Mud",
	"dimensions" : "18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)",
	"country" : "",
	"category" : "Paintings",
	"rights" : "© Mike Visser",
	"infoLink" : "",
    "__v" : 0
 }
 */

router.delete('/objects/:id', objectController.deleteObject)
/**
 * @api {delete} /objects/:id Delete an object
 * @apiName delete
 * @apiGroup Objects
 *@apiParam {string} id The database ID of the object you are updating.
 * @apiSuccess {json} All API returns deleted object in json format.
 * @apiSuccessExample  Sample URL: http://domain/objects/5f21c8c3e096e928e1ccfd93

 * Success Response: 
 * {
	"_id" : ObjectId("5f21c8c3e096e928e1ccfd93"),
	"additionalImages" : [ ],
	"featured" : "false",
	"yearAcquired" : "2020",
	"isPublicDomain" : false,
	"primaryImage" : "",
	"primaryImageSmall" : "",
	"department" : "Paintings",
	"objectType" : "Painting",
	"title" : "Mike's Test Painting",
	"culture" : "",
	"period" : "",
	"artist" : "Mike Visser",
	"dateCreated" : "1936",
	"medium" : "Mud",
	"dimensions" : "18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)",
	"country" : "",
	"category" : "Paintings",
	"rights" : "© Mike Visser",
	"infoLink" : "",
    "__v" : 0
 }
 */


module.exports = router