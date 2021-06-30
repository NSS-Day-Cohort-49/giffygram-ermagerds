const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")

const API = "http://localhost:3000"

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    posts: [],
    likes: [],
    messages: [],
    users: []
}

export const fetchPosts = () => {
    return fetch(`${API}/posts`)
    .then(response => response.json())
    .then(
        (posts) => {
            applicationState.posts = posts
        }
    )
}

export const fetchLikes = () => {
    return fetch(`${API}/likes`)
    .then(response => response.json())
    .then(
        (likes) => {
            applicationState.likes = likes
        }
    )
}

export const fetchMessages = () => {
    return fetch(`${API}/messages`)
    .then(response => response.json())
    .then(
        (messages) => {
            applicationState.messages = messages
        }
    )
}

export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then(response => response.json())
    .then(
        (users) => {
            applicationState.users = users
        }
    )
}

export const getPosts = () => [...applicationState.posts]
export const getLikes = () => [...applicationState.likes]
export const getMessages = () => [...applicationState.messages]
export const getUsers = () => [...applicationState.users]
export const getFeed = () => {return applicationState.feed}

export const sendPosts = (userPosts) => {
    const mainContainer = document.querySelector(".giffygram")
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userPosts)
    }
    return fetch(`${API}/posts`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const sendLikes = (userLikes) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLikes)
    }
    return fetch(`${API}/likes`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const resetFeed = () => {
    applicationState.feed = {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    }
}

export const getOnlyFavorites = () => {
    if(applicationState.feed.displayFavorites === true) {
        const findLikes = applicationState.likes.filter(like => 
            like.userId === parseInt(localStorage.getItem("gg_user"))
        )
        const favoritePosts = applicationState.posts.filter(post => post.id === findLikes.postId)
        return favoritePosts
    }
}

export const getPostsByUser = () => {
    if(applicationState.feed.chosenUser !== null) {
        const findUsers = applicationState.posts.filter(post =>
            post.userId === applicationState.chosenUser)
            return findUsers
    }
}

export const setChosenUser = (chosenUserId) => {
    applicationState.feed.chosenUser = chosenUserId
}
export const setDisplayFavorites = () => {
    if(applicationState.feed.displayFavorites === true) {
        applicationState.feed.displayFavorites = false;
    } 
    if(applicationState.feed.displayFavorites === false) {
        applicationState.feed.displayFavorites = true;
    }
}

export const deleteFavorite = (id) => {
    return fetch(`${API}/likes/${id}`, {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
} 
 
export const deletePost = (id) => {
    return fetch(`${API}/posts/${id}`, {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const markAllMessages = () => {
    for(const message of applicationState.messages) {
        if(message.recipientId === parseInt(localStorage.getItem("gg_user"))) {
            fetch(`${API}/messages/${message.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: message.userId,
                    recipientId: message.recipientId,
                    text: message.text,
                    read: true})
            }
        )}
    }
}