import { getUsers } from "../data/provider.js" 

export const postByUser = (user) => {
    const users = getUsers()
    users.find(user => user.name === user)
    console.log(user)
}
