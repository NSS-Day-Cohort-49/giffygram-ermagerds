import { getOnlyFavorites } from "../data/provider.js"
export const postFavorites = () => {
    const myFavs = getOnlyFavorites()
    return `foo<br>`

    console.log("favorites are being rendered")
}