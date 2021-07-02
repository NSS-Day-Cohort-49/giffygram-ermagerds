import { getPosts, getUsers, getLikes, deletePost, deleteFavorite, sendLikes } from "../data/provider.js";

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

export const postByUser = (filterUser) => {
    const users = getUsers()
    const posts = getPosts()
    const likes = getLikes()
    const thisUser = users.find(user => user.id === filterUser)
    const userPosts = posts.filter(post =>
        post.userId === thisUser.id)

        let postHTML = `<section class = "giffygram__feed"<ul class = giffygram__feed">`

       
            for(const userPost of userPosts) {
                const foundUser = users.find(user => user.id ===userPost.userId)
        {
            if (likes.find(like => like.postId === userPost.id)) {
                postHTML += `<li>
                ${userPost.title}<br>
                <img src ="${userPost.imageUrl}" alt="${userPost.description}">
                <br>
                Posted By ${foundUser.name} On ${new Date(userPost.timeStamp).toLocaleDateString()}
                <br><button class = "button__unfav" name="unfavButton" id="${userPost.id}"></button>`
                if (foundUser.id === parseInt(localStorage.getItem("gg_user"))){
                    postHTML +=
                `<button class = "button__delete" name="deleteButton" id="${userPost.id}"></button>`
            }
               postHTML += `</ul></section>` 
            }

            else {
            postHTML += `<li>
            ${userPost.title}<br>
            <img src ="${userPost.imageUrl}" alt="${userPost.description}">
            <br>
            Posted By ${foundUser.name} On ${new Date(userPost.timeStamp).toLocaleDateString()}
            <br><button class = "button__fav" name="favButton" id="${userPost.id}"></button>`
                if (foundUser.id === parseInt(localStorage.getItem("gg_user")))
                {
                    postHTML +=
                `<button class = "button__delete" name="deleteButton" id="${userPost.id}"></button>`
                }
            postHTML += `</ul></section>`
        }}}
        return postHTML
}