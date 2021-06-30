import { GiffyGram } from "./GiffyGram.js"
import { LoginForm } from "./auth/Login.js"
import { fetchLikes, fetchMessages, fetchPosts, fetchUsers } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    Promise.all([fetchLikes(), fetchMessages(), fetchPosts(), fetchUsers()])
    .then(
        () => {
    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
    }
)}

document.addEventListener("stateChanged",
customEvent => {

    renderApp()

})

renderApp()