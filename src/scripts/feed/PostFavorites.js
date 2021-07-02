import { sendLikes, getOnlyFavorites, getUsers, deleteFavorite, getLikes, getPosts, deletePost } from '../data/provider.js';

// document.addEventListener('click', click => {
//     if (click.target.id.startsWith("favorite")) {
//         const [,favoriteId] = click.target.id.split('--')
//         sendLikes(parseInt(favoriteId))
//         document.dispatchEvent(new CustomEvent("stateChanged"))
//     }
// }
// )

// document.addEventListener('click', click => {
//     if (click.target.id.startsWith('blockPost--')) {
//         const [,postId] = click.target.id.split('--')
//         deletePost(parseInt(postId))
//         document.dispatchEvent(new CustomEvent("stateChanged"))
//     }
// }
// )


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

export const postFavorites  = () => {
    const favorites = getOnlyFavorites()
    const users = getUsers()
        let favoritesHTML = `<section class = "giffygram__favorites"><ul class = "giffygram__favorites>`
debugger
            for (const favorite of favorites) {
                const foundUser = users.find(user => user.id ===favorite.userId)

           favoritesHTML += `<li>
           ${favorite.title}<br>
           <img src ="${favorite.imageUrl}" alt="${favorite.description}">
           <br>
           Posted By ${foundUser.name} On ${new Date(favorite.timeStamp).toLocaleDateString()}
        <br>
        <button class="button__unfav" name="unfavButton"
                id="blockPost--${favorite.id}"></button>`
                if (foundUser.id === parseInt(localStorage.getItem("gg_user"))) {
                    favoritesHTML += `
        <button class="button__delete" name="deleteButton" id="${favorite.id}"></button>`
                }
    favoritesHTML += `</li>
        </ul></section>`
    }
        return favoritesHTML
}

 