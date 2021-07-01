import { fetchLikes, fetchMessages, fetchPosts, getPosts, resetFeed, sendPosts, getUsers, deletePost } from "../data/provider.js";

const mainContainer = document.querySelector(".giffygram")

mainContainer.addEventListener("click",clickEvent => {
    if(clickEvent.target.name === "giffygram") {
        resetFeed()
        fetchLikes()
        fetchMessages()
        fetchPosts()
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

export const postList  = () => {
    const posts = getPosts()
    const users = getUsers()

    const postHTML = `<ul>${posts.map(
 
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
           <br>
           <button class="post__delete"
                id="post--${post.id}">
            Delete
        </button>
    </li>
        `
        }).join("")}</li>
        </ul>`
        return postHTML
 }
    
 document.addEventListener("click", click => {
    if (click.target.id.startsWith("post--")) {
        const [,postId] = click.target.id.split("--")
        deletePost(parseInt(postId))
    }
})