import { PostFavorites } from "./feed/PostFavorites.js"
import { PostByUser } from "./feed/PostByUser.js"
import { PostList } from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"
import { getFeed } from "./data/provider.js"

export const GiffyGram = () => {

    // Show main main UI
    const feed = getFeed()
    if(feed.displayFavorites === false && feed.chosenUser === null) {
        return `<h1>Giffygram</h1>
        ${PostList()}
        ${Footer()}`
        }
    else if(feed.displayFavorites === true) {
        return `<h1>Giffygram</h1>
        ${PostFavorites()}
        ${Footer()}`
    }
    else if(feed.chosenUser !== null) {
        return `<h1>Giffygram</h1>
        ${PostByUser(feed.chosenUser)}
        ${Footer()}`
    }
}
