import { sendPosts } from "../data/provider.js"

const applicationElement = document.querySelector(".giffygram")



applicationElement.addEventListener("click", clickEvent => { //when something in the maincontainer is clicked - maincontainer is referenced in main.js
    if (clickEvent.target.id === "submitGif") { //the button below
        // Get what the user typed into the form fields
        const title = document.getElementById("title").value // ""
        const url = document.getElementById("gifURL").value
        const description = document.getElementById("description").value // ""
        
        // Make an object out of the user input
        const dataToSendToAPI = {
            title: title,
            description: description,
            userId: parseInt(localStorage.getItem("gg_user")),
            imageUrl: url,
            timeStamp: Date.now()
        }
        // Send the data to the API for permanent storage
        sendPosts(dataToSendToAPI)
        
    }
})





export const postEntry = () => {
    

    let html = `
    <div class="primary">
    <button id="postGif"> Post your Gif! </button>
    </div>
    <div id="secondary">
        <div id="field" class="field">
        <input type="text" id="title" name="title" class="input" placeholder="Title" />
        </div>
        <div id="field" class="field">
            <input type="text" id="gifURL" name="gifURL" class="input" placeholder="Url of Gif" />
        </div>
        <div id="field" class="field">
            <div>
            <textarea id="description" type="text" name="Letter" class="textarea" placeholder="Story behind your gif..."></textarea>
            </div>
        </div>
        <div id="field" class="field">
        <button id="submitGif">Submit</button>
        <button id="cancelGif">Cancel</button>
        </div>
    </div>
    
        `
    return html
    
}



document.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === "postGif") {
        let div = document.getElementById("secondary")
        div.style.display = 'block'
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    } 
}
)



document.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === "cancelGif") {
        let div = document.getElementById("secondary")
        div.style.display = 'none'
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    } 
}
)