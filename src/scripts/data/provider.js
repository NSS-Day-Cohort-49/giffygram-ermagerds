const API = "http://localhost:3000"

const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false,
        displayAuthor: null
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
        document.dispatchEvent(new CustomEvent("stateChanged"))
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
        document.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

export const resetFeed = () => {
    applicationState.feed = {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false,
        displayAuthor: null
    }
}

export const getOnlyFavorites = () => {
    
        const findLikes = applicationState.likes.filter(like => 
            like.userId === parseInt(localStorage.getItem("gg_user"))
        )
        const favoritePosts = []
        for(const like of findLikes) {
        const thisFavorite = applicationState.posts.find(post => post.id === like.postId)
        if (thisFavorite) {
        favoritePosts.push(thisFavorite)
        }
    }
        return favoritePosts
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
export const setDisplayAuthor = (displayAuthorId) => {
    applicationState.feed.displayAuthor = displayAuthorId
}
export const setDisplayFavorites = () => {
    if(applicationState.feed.displayFavorites === true) {
        applicationState.feed.displayFavorites = false;
    } 
    else if(applicationState.feed.displayFavorites === false) {
        applicationState.feed.displayFavorites = true;
    }
}

export const deleteFavorite = (id) => {
    return fetch(`${API}/likes/${id}`, {method: "DELETE"})
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
} 
 
export const deletePost = (id) => {
    return fetch(`${API}/posts/${id}`, {method: "DELETE"})
    .then(
        () => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
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

export const setDisplayMessages = () => {
    if(applicationState.feed.displayMessages === true) {
        applicationState.feed.displayMessages = false;
    } 
    else if(applicationState.feed.displayMessages === false) {
        applicationState.feed.displayMessages = true;
    }
}