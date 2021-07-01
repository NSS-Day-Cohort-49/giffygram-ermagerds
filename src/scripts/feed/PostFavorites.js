import { sendLikes, getLikes, getOnlyFavorites, getPosts } from '../data/provider.js';

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

    const favoritesHTML = `<ul>${favorites.map(
 
        (favorite) => {

            // const foundLikes = likes.find(
            //     (like) => {
            //         return like.id === parseInt(favorite.userId)
            //     }
            // )
           return `<li>
           ${favorite.title}<br>
           <img src ="${favorite.imageUrl}" alt="${favorite.description}">
           <br>
           Posted By ${foundLikes.name} On ${new Date(favorite.timeStamp).toLocaleDateString()}
        <div id="field" class="field">
            <button id="favorite">Favorite</button>
        </div>
        `
        }).join("")}</li>
        </ul>`
        return favoritesHTML
 }