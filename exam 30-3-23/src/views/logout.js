import { logout } from '../data/users.js';
import { page } from '../lib.js';


export async function showLogout() {
    const result = await logout();
    page.redirect('/');

}