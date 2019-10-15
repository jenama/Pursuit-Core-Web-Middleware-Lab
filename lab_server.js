const express = require("express");

const bodyParser = require("body-parser")

const port = 3090;

const app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

const handleCors = (req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*")
    next()
}

app.use(handleCors)

let animalArr = ["lion", "dog", "tiger", "panther", "zebra", "giraffe"]

const animalTypes = (req, res, next) => {
    
     let newAnimal = req.body
    
    for (let name of animalArr) {
    
        if (newAnimal.name === name) {
            console.log("triggered if statement")
            res.json({
                status: "success",
                message: true
            })
        }
    }
        res.json({
            status: "name not found",
            message: false
        })
    next()
}

const isAnimal = (req, res, next) => {
    let newAnimal = req.query.name
    console.log(animalArr)
    console.log(newAnimal)
    
    if (animalArr.includes(newAnimal)) {
        res.send(`${newAnimal} is there!!!`)
    }
        res.send ('not there please add it')
}

app.get("/animal", isAnimal)

app.post("/animal", animalTypes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})