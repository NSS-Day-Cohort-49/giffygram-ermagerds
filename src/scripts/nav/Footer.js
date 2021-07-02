import { setChosenUser, setDisplayFavorites, getUsers, getFeed, resetFeed } from "../data/provider.js"

document.addEventListener("change", (event) => {
    
    if(event.target.name === "chooseUser") {
        
        if (event.target.value === "All Users"){
            resetFeed()
            document.dispatchEvent(new CustomEvent("stateChanged"))
            return
        }
        else {
            
        const users = getUsers()
        const chosenUser = event.target.value
        const userObj = users.find(user => user.name === chosenUser)
      setChosenUser(userObj.id)
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }}
})

document.addEventListener("click", (event) => {
    if(event.target.name === "displayOnlyFavorites") {
    const feed = getFeed()
      setDisplayFavorites()
      document.dispatchEvent(new CustomEvent("stateChanged"))
      }
    })

export const footer = () => {

const users = getUsers()
const feed = getFeed()

if(feed.displayFavorites === true) {
    const footerHTML = `<select class="chosenUser" name="chooseUser"> 
                        <option selected disabled> Filter By Poster</option>
                        <option name = "allUsers" value="allUsers">All Users</option>
    ${users.map(
    
        (user) => {
            return `<option id="interface-output"value="${user.name}"name="chosenUserName" >${user.name}</option>`
        }
    ).join("")
}
</select>
<input type ="checkbox" id="setDisplayFavorites" class="favoritesFilter" name="displayOnlyFavorites" checked>Display Only Favorites`
return footerHTML
}

if(feed.displayFavorites === false) {
    const footerHTML = `<select class="chosenUser" name="chooseUser">
                        <option selected disabled> Filter By Poster</option>
                        <option name = "allUsers">All Users</option>
    
    ${users.map(
    
        (user) => {
            return `<option id="interface-output"value="${user.name}"name="chosenUserName">${user.name}</option>`
        }
    ).join("")
}
</select>
<input type ="checkbox" id="setDisplayFavorites" class="favoritesFilter" name="displayOnlyFavorites">Display Only Favorites`
return footerHTML
}
}

