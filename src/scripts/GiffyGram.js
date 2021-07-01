import { postEntry } from "./feed/PostEntry.js"
import { postList } from "./feed/PostList.js"
export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
    ${postEntry()}
    ${postList()}   
    `
}
