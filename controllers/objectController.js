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
                let fieldList = objects.map(val =>{
                    let objVal = val[req.params.field]
                    return objVal
                })
                return fieldList
            })
            .then(array=>{
                let newArray = [...new Set(array)]
                resp.json(newArray)
            })
    }
    , showXObjects: (req, resp)=>{
        Object.find({[req.params.field]: { '$regex': `^${req.params.query}$`, $options: 'i'}})
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
    , singleObject: (req, resp) =>{
        Object.findOne({_id: req.params.id})
            .then(object =>{
                resp.json(object)
            })
    }
    , isFeatured: (req, resp) =>{
        Object.find({featured: true})
            .then(objects =>{
                resp.json(objects)
            })
    }
    , randomObject: (req, resp) =>{
        let random = Math.floor(Math.random() * 400)

        Object.findOne().skip(random)
            .then(object =>{
                resp.json(object)
            })
    }
    , addObject: (req, resp) => {
        Object.create(req.body)
            .then(object =>{
                resp.json(object)
            })
    }
    , updateObject: (req, resp) =>{
        Object.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(object =>{
                resp.json(object)
            })
    }
    , deleteObject: (req, resp) =>{
        Object.findByIdAndDelete(req.params.id)
            .then(object =>{
                resp.json(object)
            })
    }
}