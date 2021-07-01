import { getMessages, getUsers, markAllMessages } from "../data/provider.js"


export const renderDisplayMessage = () => {
    const messages = getMessages()
    const users = getUsers()

    const html = `<div class="message">
        ${messages.map(message => {
            if (message.recipientId === parseInt(localStorage.getItem("gg_user"))) {
            const sender = users.find(user => message.userId === user.id)
            return `<div class="message" id="message--${message.id}">
                        <div class="message__author">From ${sender.name}</div>
                        <div class="message__text">${message.text}</div>
                    </div>`
        }}).join("")
        }
    </div>`

    markAllMessages()

    return html
}




