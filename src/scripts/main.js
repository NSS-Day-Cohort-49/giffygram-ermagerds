import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchLikes, fetchMessages, fetchPosts, fetchUsers, markAllMessages } from "./data/provider.js"
import { messageList } from "./message/DisplayMessage.js"
import { setMessageDisplay } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    Promise.all([fetchLikes(), fetchMessages(), fetchPosts(), fetchUsers()])
    .then(
        () => {
            if (user) { 
                const displayMessages = setMessageDisplay()

                if (displayMessages) {
                    applicationElement.innerHTML = messageList()
                    markAllMessages()
                }
                else {
                    applicationElement.innerHTML = GiffyGram()
                }
            }
            else {
        console.log("User not authenticated")
        fetchUsers().then(
            () => {
                applicationElement.innerHTML = LoginForm()
            }
        )
    }
}
    )
}

document.addEventListener("stateChanged",
customEvent => {

    renderApp()

})

renderApp()


