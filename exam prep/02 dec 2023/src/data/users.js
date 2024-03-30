import { clearUserData, setUserData, updateNav } from "../util.js";
import { post, get } from "./request.js";

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
}

//TODO Adapt user profile to exam requirements
export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
    updateNav();
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
    updateNav();
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();
    updateNav();

    await promise;
}