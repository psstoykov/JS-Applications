import { logout } from "../data/users.js";
import { page } from "../lib.js";


export async function showLogout() {
    await logout();

    if (!localStorage.user) {
        page.redirect('/')
    } else {
        return alert('logout failed')
    }
}