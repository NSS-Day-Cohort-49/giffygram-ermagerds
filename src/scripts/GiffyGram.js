import { postFavorites } from "./feed/PostFavorites.js"
import { postByUser } from "./feed/PostByUser.js"
import { postList } from "./feed/PostList.js"
import { footer } from "./nav/Footer.js"
import { getFeed } from "./data/provider.js"
import { postEntry } from "./feed/PostEntry.js"

export const GiffyGram = () => {

    // Show main main UI
    const feed = getFeed()
    if(feed.displayFavorites === false && feed.chosenUser === null) {
        return `<h1>Giffygram</h1>
        ${postEntry()}
        ${postList()}
        <br>
        ${footer()}`
        }
    else if(feed.displayFavorites === true) {
        return `<h1>Giffygram</h1>
        ${postFavorites()}
        <br>
        ${footer()}`
    }
    else if(feed.chosenUser !== null) {
        return `<h1>Giffygram</h1>
        ${postByUser(feed.chosenUser)}
        <br>
        ${footer()}`
    }
}