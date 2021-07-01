import { sendLikes, getOnlyFavorites, getUsers } from '../data/provider.js';

document.addEventListener('click', click => {
    if (click.target.id.startsWith("favorite")) {
        const [,favoriteId] = click.target.id.split('--')
        sendLikes(parseInt(favoriteId))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}
)

document.addEventListener('click', click => {
    if (click.target.id.startsWith('blockPost--')) {
        const [,postId] = click.target.id.split('--')
        deletePost(parseInt(postId))
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}
)

export const postFavorites  = () => {
    const favorites = getOnlyFavorites()
    const users = getUsers()
    const favoritesHTML = `<ul>${favorites.map(
 
        (favorite) => {

            const foundUser = users.find(
                (user) => {
                    return user.id === parseInt(favorite.userId)
                }
            )
           return `<li>
           ${favorite.title}<br>
           <img src ="${favorite.imageUrl}" alt="${favorite.description}">
           <br>
           Posted By ${foundUser.name} On ${new Date(favorite.timeStamp).toLocaleDateString()}
        <div id="field" class="field">
            <button id="favorite">Favorite</button>
        </div>
        <br>
        <button class="favorite__delete"
                id="favorite--${request.id}">
            Delete Favorite
        </button>
    </li>
        `
        }).join("")}</li>
        </ul>`
        return favoritesHTML
 }

 document.addEventListener("click", click => {
    if (click.target.id.startsWith("favorite--")) {
        const [,favoriteId] = click.target.id.split("--")
        deleteRequest(parseInt(favoriteId))
    }
})