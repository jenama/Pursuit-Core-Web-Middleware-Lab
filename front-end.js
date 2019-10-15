document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button")
    button.addEventListener("click", fetchData)
})

const fetchData = async() => {
    let baseUrl = "http://localhost:3090/animal/"
    let endpoint = getTheInput()

    let response = await axios.get(`${baseUrl}?name=${endpoint}`)
    console.log(response)

    displayAnimal(response)
}

const getTheInput = () => {
    let input = document.querySelector("input")
    let endpoint = input.value
    return endpoint
}

const displayAnimal = () => {
    let animalDiv = document.createElement("div")
    let image = document.createElement("img")
   
    let text = document.createElement("p")
   

}