import { getUsers, getPosts, getMessages } from "../data/provider.js"

export const AuthorPage = (displayAuthorId) => {
    const users = getUsers()
    const posts = getPosts()
    const messages = getMessages()
    const postAuthor = users.find(user => user.id === parseInt(displayAuthorId))
    const userPosts = posts.filter(post =>
        post.userId === postAuthor.id)
    const conversations = messages.filter(message => message.recipientId === parseInt(localStorage.getItem("gg_user")) && message.userId === postAuthor.id)

        let postHTML = `<ul class="giffygram__profile">

        <li> ${postAuthor.name} </li>
        <li> Number of Posts: ${userPosts.length+1}<li>`
        for(const conversation of conversations) {
            postHTML += `<li><div class="message" id="message--${conversation.id}">
            <div class="message__author">From ${postAuthor.name}</div>
            <div class="message__text">${conversation.text}</div>
        </div></li>`
    }
        postHTML += `</ul>`
        
        return postHTML
        }