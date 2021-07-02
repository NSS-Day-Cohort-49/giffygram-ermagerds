import { postFavorites } from "./feed/PostFavorites.js"
import { postByUser } from "./feed/PostByUser.js"
import { postList } from "./feed/PostList.js"
import { footer } from "./nav/Footer.js"
import { getFeed, resetFeed } from "./data/provider.js"
import { postEntry } from "./feed/PostEntry.js"
import { NavBar } from "./nav/Navigation.js"
import { renderDisplayMessage } from "./feed/Message.js"
import { AuthorPage } from "./friends/AuthorPage.js"


export const GiffyGram = () => {
    // Show main main UI
    const feed = getFeed()
     if(feed.displayFavorites === false && feed.chosenUser === null && feed.displayMessages === false && feed.displayAuthor === null) {
        return `
        ${NavBar()}
        ${postEntry()}
        ${postList()}
        <br>
        ${footer()}`
    }
    else if (feed.displayMessages === true) {
        return `${NavBar()}
        ${renderDisplayMessage()}`
    }
    else if (feed.displayAuthor !== null) {
        return `
        ${NavBar()}
        ${AuthorPage(feed.displayAuthor)}
        <br>
        ${footer()}`
    }
    else if(feed.displayFavorites === true) {
        return `
        ${NavBar()}
        ${postFavorites()}
        <br>
        ${footer()}`
    }
    else if(feed.chosenUser !== null) {
        return `
        ${NavBar()}
        ${postByUser(feed.chosenUser)}
        <br>
        ${footer()}`
    }
}
