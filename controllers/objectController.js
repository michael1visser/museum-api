const Object = require('../models/Object')

module.exports = {

    index: (req, resp) =>{
        Object.find({})
            .then(objects =>{
                resp.json(objects)
            })
    }
    , showAllX: (req, resp) =>{
        Object.find({})
            .then(objects =>{
                let resourceNames = objects.map(val =>{
                    let objVal = val[req.params.resource]
                    return objVal
                })
                return resourceNames
            })
            .then(array=>{
                let newArray = [...new Set(array)]
                resp.json(newArray)
            })
    }
    , showXObjects: (req, resp)=>{
        Object.find({[req.params.resource]: `${req.params.name}`})
            .then(objects =>{
                resp.json(objects)
            })
    }
    , isPublic: (req, resp) =>{
        Object.find({isPublicDomain: true})
            .then(objects =>{
                resp.json(objects)
            })
    }
    , isFeatured: (req, resp) =>{
        Object.find({featured: true})
            .then(objects =>{
                resp.json(objects)
            })
    }
    , addObject: (req, resp) => {
        Object.create(req.body)
            .then(object =>{
                resp.json(object)
            })
    }
}