import { postFavorites } from "./feed/PostFavorites.js"
import { postByUser } from "./feed/PostByUser.js"
import { postList } from "./feed/PostList.js"
import { footer } from "./nav/Footer.js"
import { getFeed } from "./data/provider.js"
import { postEntry } from "./feed/PostEntry.js"
import { NavBar } from "./nav/Navigation.js"
import { renderDisplayMessage } from "./feed/Message.js"

export const GiffyGram = () => {

    // Show main main UI
    const feed = getFeed()
    if (feed.displayMessages === true) {
        return `${NavBar()}
        ${renderDisplayMessage()}`
    }
    else if(feed.displayFavorites === false && feed.chosenUser === null) {
        return `
        ${NavBar()}
        ${postEntry()}
        ${postList()}
        ${footer()}`
        }
    else if(feed.displayFavorites === true) {
        return `
        ${NavBar()}
        ${postFavorites()}
        ${footer()}`
    }
    else if(feed.chosenUser !== null) {
        return `
        ${NavBar()}
        ${postByUser(feed.chosenUser)}
        ${footer()}`
    }
}
