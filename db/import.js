const axios = require('axios').default
axios.defaults.baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
const fs = require('file-system')

let objIds = []
let data = []

//Makes use of the Fisher Yates randomization algorithm.
//JS based on the following: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function randomizeArt(array){
    let newArray = []
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    for (let k = 0; k < 400; k++){
        newArray.push(array[k])
    }

    return newArray
}

axios.get()
    .then(objects =>{
        objIds = randomizeArt(objects.data.objectIDs)
    })
    .then(() =>{
        const mapData = objIds.map(val =>{
            return axios.get(`/${val}`)
                    .then(objData =>{
                        let newObj = {}
                            newObj.featured = objData.data.isHighlight
                            newObj.yearAcquired = objData.data.accessionYear
                            newObj.isPublicDomain = objData.data.isPublicDomain
                            newObj.primaryImage = objData.data.primaryImage
                            newObj.primaryImageSmall = objData.data.primaryImageSmall
                            newObj.additionalImages = objData.data.additionalImages
                            newObj.department = objData.data.department
                            newObj.objectType = objData.data.objectName
                            newObj.title = objData.data.title
                            newObj.culture = objData.data.culture
                            newObj.period = objData.data.period
                            newObj.artist = objData.data.artistDisplayName
                            newObj.dateCreated = objData.data.objectDate
                            newObj.medium = objData.data.medium
                            newObj.dimensions = objData.data.dimensions
                            newObj.country = objData.data.country
                            newObj.category = objData.data.classification
                            newObj.rights = objData.data.rightsAndReproduction
                            newObj.infoLink = objData.data.linkResource
                            newObj.bio = objData.data.artistDisplayBio
                            newObj.nationality = objData.data.artistNationality
                            newObj.birthDate = objData.data.artistBeginDate
                            newObj.deathDate = objData.data.artistEndDate
                            newObj.gender = objData.data.artistGender
                            newObj.wikiUrl = objData.data.artistWikidata_URL
                            newObj.UlanUrl = objData.data.artistULAN_URL
                        data.push(newObj)
                    })   
        })
    
        Promise.all(mapData).then(()=>{
            fs.writeFile("db/museumObjects.json", JSON.stringify(data), (err) =>{
                if (err) throw err
                console.log("success")
                process.exit()
            })

        })  
    })

    