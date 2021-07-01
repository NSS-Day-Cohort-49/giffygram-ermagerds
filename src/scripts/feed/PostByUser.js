import { getPosts, getUsers } from "../data/provider.js";

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click",clickEvent => {
    if(clickEvent.target.name === "giffygram") {
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const postByUser = (filterUser) => {
    const users = getUsers()
    const posts = getPosts()
    const thisUser = users.find(user => user.id === filterUser)
    const userPosts = posts.filter(post =>
        post.userId === thisUser.id)

    const postHTML = `<ul>${userPosts.map(
 
        (post) => {

            const foundUser = users.find(
                (user) => {
                    return user.id === parseInt(post.userId)
                }
            )
    
           return `<li>
           ${post.title}<br>
           <img src ="${post.imageUrl}" alt="${post.description}">
           <br>
           Posted By ${foundUser.name} On ${new Date(post.timeStamp).toLocaleDateString()}
        `
        }).join("")}</li>
        </ul>`
        return postHTML
 }


 
