import { getPosts } from "/scripts/data/provider.js"

export const PostList = () => {

const posts = getPosts() 

const formatDate= (timestamp) => {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString()
    return formattedDate
} 

const postHTML = `<ul>${posts.map(

    (post) => {
        
    return `<li><img src ="${post.imageUrl}" alt="${post.description}">
    <br>
    ${formatDate(post.timeStamp)}`
    }).join("")}</li>
    </ul>`
    return postHTML
}


