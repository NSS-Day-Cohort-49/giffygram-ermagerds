import { resetFeed, getMessages, setMessageDisplay } from "../data/provider.js";

import { messageList } from "../message/DisplayMessage.js";



document.addEventListener("click", event => {
    if (event.target.id === "logout") {
        localStorage.removeItem("gg_user")
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", event => {
    if (event.target.classList.contains("notification__count")) {
        setMessageDisplay(true)
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", event => {
    if (event.target.id === "home") {
        resetFeed()
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})




export const NavBar = () => {
    const inbox = getMessages()

return `
<nav class="navigation">
    <div class="navigation__icon navigation__item">
        <img src='https://w7.pngwing.com/pngs/801/389/png-transparent-peanut-butter-and-jelly-sandwich-gelatin-dessert-pizza-french-toast-pizza-furniture-cartoon-human-behavior.png' id="home" />
    </div>
    <div class="navigation__name navigation__item">
         GiffyGram!
    </div>
    <div class="navigation__icon navigation__item">
        <img src="https://www.pinclipart.com/picdir/middle/69-695903_pen-signature-svg-png-icon-free-download-455083.png" id="draftmessage" />
    </div>
    <div class="navigation__item navigation__message">
        <div class="notification__count">
            ${inbox.length}
        </div>
    </div>
    <div class="navigation__item navigation__logout">
                <button id="logout">Logout</button>
    </div>
</nav>
`

}

