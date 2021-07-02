import { NavBar } from "../nav/Navigation.js";
import { renderDisplayMessage } from "../feed/Message.js";


export const messageList = () => {
    return `
    ${NavBar()}
    <div class="message">
    ${renderDisplayMessage()}
    </div>
    `
}