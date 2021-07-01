import { postEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"
import { NavBar } from "./nav/Navigation.js"
export const GiffyGram = () => {

    // Show main main UI
    return `${NavBar()}
    ${postEntry()}
    ${postList()}   
    `
}
