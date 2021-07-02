

export const AuthorPage = (displayAuthorId) => {
    const users = getUsers()
    const posts = getPosts()
    const postAuthor = users.find(user => user.id === displayAuthorId)
    const userPosts = posts.filter(post =>
        post.userId === postAuthor.id)

        let postHTML = `<section class = "giffygram__profile"<ul class = giffygram__profile">
            
        
        
        
        
        
        `