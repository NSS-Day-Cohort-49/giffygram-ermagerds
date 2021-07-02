

export const AuthorPage = (displayAuthorId) => {
    const users = getUsers()
    const posts = getPosts()
    const postAuthor = users.find(user => user.id === displayAuthorId)
    const userPosts = posts.filter(post =>
        post.userId === postAuthor.id)
    const conversations = messages.filter(message => message.recipientId === parseInt(localStorage.getItem("gg_user")) && message.authorId === postAuthor.id)

        let postHTML = `<section class = "giffygram__profile"<ul class = giffygram__profile">

        <li> ${postAuthor.name} </li>
        <li> Number of Posts: ${userPosts.length+1}<li>`
        for(const conversation of conversations) {
            postHTML += `<li><div class="message" id="message--${message.id}">
            <div class="message__author">From ${sender.name}</div>
            <div class="message__text">${message.text}</div>
        </div></li>`
        }
        return postHTML
        }