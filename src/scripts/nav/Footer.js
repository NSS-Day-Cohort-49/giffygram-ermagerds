import { setChosenUser, setDisplayFavorites, getUsers, getFeed } from "/scripts/data/provider.js"

document.addEventListener("click", (event) => {
    if(event.target.name === "chosenUserName") {

      setChosenUser(event.target.id)
      document.dispatchEvent(new CustomEvent("stateChanged"))
    }
  })

document.addEventListener("click", (event) => {
    if(event.target.name === "displayOnlyFavorites") {

      setDisplayFavorites()
      document.dispatchEvent(new CustomEvent("stateChanged"))

      }
    })


export const Footer = () => {

const users = getUsers()
const feed = getFeed()

if(feed.displayFavorites === true) {
    const footerHTML = `<select class="chosenUser"> ${users.map(
    
        (user) => {
            return `<option id="${user.id}"value="${user.name}"name="chosenUserName" >${user.name}</option>`
        }
    ).join("")
}
</select>
<input type ="checkbox" id="setDisplayFavorites" class="favoritesFilter" name="displayOnlyFavorites" checked>Display Only Favorites`
return footerHTML
}

if(feed.displayFavorites === false) {
    const footerHTML = `<select class="chosenUser"> ${users.map(
    
        (user) => {
            return `<option id="${user.id}"value="${user.name}"name="chosenUserName">${user.name}</option>`
        }
    ).join("")
}
</select>
<input type ="checkbox" id="setDisplayFavorites" class="favoritesFilter" name="displayOnlyFavorites">Display Only Favorites`
return footerHTML
}
}

