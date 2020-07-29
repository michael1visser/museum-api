const Object = require('../models/Object')
const Artist = require('../models/Artist')

const objectData = require('./museumObjects.json')

const allArtistNames = objectData.map(val =>{
    let artistName = ""
    artistName = val.artist
    return artistName
})

let artists = [...new Set(allArtistNames)]

let artistData = artists.map(name =>{
    let singleArtist = {}

    objectData.map(val =>{
        if (val.artist == name && name !== ""){
            singleArtist.name = val.artist
            singleArtist.bio = val.bio
            singleArtist.nationality = val.nationality
            singleArtist.birthDate = val.birthDate
            singleArtist.deathDate = val.deathDate
            singleArtist.gender = val.gender
            singleArtist.wikiUrl = val.wikiUrl
            singleArtist.UlanUrl = val.UlanUrl
        }
    })
    return singleArtist
})


Object.deleteMany({})
    .then(() =>{
        Object.create(objectData)
        .then(()=>{
            console.log("Object seed success")
            
            Artist.deleteMany({})
                .then(()=>{
                    Artist.create(artistData)
                        .then(()=>{
                            console.log("Artist seed success")
                            process.exit()
                        })
                        .catch(err =>{
                            console.log("Artist error: " + err)
                        })
                })
        })
        .catch(err =>{
            console.log("Object Error: " + err)
        })
    }) 

