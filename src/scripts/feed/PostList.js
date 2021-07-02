import { fetchLikes, fetchMessages, fetchPosts, getPosts, resetFeed,getUsers, deletePost, getLikes, sendLikes, deleteFavorite } from "../data/provider.js";

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
    const likes = getLikes()
    let postHTML = `<ul>`
        
        for (const post of posts) {

                const foundUser = users.find(
                    (user) => {
                        return user.id === parseInt(post.userId)
                    }
                )
                    if(likes.find(like => like.postId === post.userId)){
                        postHTML += `<li>
               ${post.title}<br>
               <img src ="${post.imageUrl}" alt="${post.description}">
               <br>
               Posted By ${foundUser.name} On ${new Date(post.timeStamp).toLocaleDateString()}
               <button class = "button__delete" name="deleteButton" id="${post.id}"></button>
               <br>
               <button class = "button__unfav" name="unfavButton" id="${post.id}"></button>
            
               </li>`}
                else {
                    postHTML += `<li>
               ${post.title}<br>
               <img src ="${post.imageUrl}" alt="${post.description}">
               <br>
               Posted By ${foundUser.name} On ${new Date(post.timeStamp).toLocaleDateString()}
               <button class = "button__delete" name="deleteButton" id="${post.id}"></button>
               <br>
               <button class = "button__fav" name="favButton" id="${post.id}"></button>
            
               </li>`}}
            postHTML += `</ul>` 
            return postHTML
            }
                   

    document.addEventListener("click", (event) => {
        if(event.target.name === "unfavButton") {
        const postId = parseInt(event.target.id)
        const likes = getLikes()
        for(const like of likes) {
            if (like.postId === postId) {
        const favoriteId = like.id
          deleteFavorite(favoriteId)
        }
          document.dispatchEvent(new CustomEvent("stateChanged"))
    }
          }
        })
    
    document.addEventListener("click", (event) => {
           if(event.target.name === "favButton") {
        const postId = parseInt(event.target.id)
        const userId = parseInt(localStorage.getItem("gg_user"))
        const dataToSendToAPI = {
            postId: postId,
            userId: userId
        }
            sendLikes(dataToSendToAPI)
            document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        })
    
    
    document.addEventListener("click", (event) => {
        if(event.target.name === "deleteButton") {
        const postId = parseInt(event.target.id)
        const posts = getPosts()
        for(const post of posts) {
            if (post.userId === parseInt(localStorage.getItem("gg_user")))
            deletePost(postId)
        }
            document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        })
