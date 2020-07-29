const Artist = require('../models/Artist')

module.exports = {

    index: (req, resp) =>{
        Artist.find({})
            .then(artists =>{
                resp.json(artists)
            })
    }
    , showArtists: (req, resp)=>{
        Artist.find({[req.params.resource]: `${req.params.attribute}`})
            .then(artists =>{
                resp.json(artists)
            })
    }
    , addArtist: (req, resp) => {
        Artist.create(req.body)
            .then(artist =>{
                resp.json(artist)
            })
    }
    , updateArtist: (req, resp) =>{
        Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(artist =>{
                resp.json(artist)
            })
    }
    , deleteArtist: (req, resp) =>{
        Artist.findByIdAndDelete(req.params.id)
            .then(artist =>{
                resp.json(artist)
            })
    }
    , searchName: (req, resp) =>{
        Artist.find({name: {$regex: `${req.params.name}`, $options: 'i'}})
            .then(artist =>{
                resp.json(artist)
            })
    }
}