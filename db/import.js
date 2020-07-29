const axios = require('axios').default
axios.defaults.baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
const fs = require('file-system')

let objIds = []
let data = []

function randomizeArt(array){
    let newArray = []
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    for (let k = 0; k < 3; k++){
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
                        data.push(objData.data)
                    })   
        })
    
        Promise.all(mapData).then(()=>{
            console.log(data)
            fs.writeFile("db/museumObjects.json", JSON.stringify(data), (err) =>{
                if (err) throw err
                console.log("success")
            })
        })  
    })

    