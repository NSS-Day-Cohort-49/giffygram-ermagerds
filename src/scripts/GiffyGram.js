import { postEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"
import { Post } from "./feed/Post.js"
export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    ${postEntry()}
    ${postList()}
    ${Post()}   
    `
}
