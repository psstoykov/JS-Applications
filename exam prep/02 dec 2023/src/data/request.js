import { clearUserData, getUserData } from "../util.js";

//TODO check if host is correct
const host = "http://localhost:3030/"
async function request(method, url, data) {
    const option = {
        method,
        headers: {}
    };

    if (data) {
        option.headers["Content-Type"] = 'application/json';
        option.body = JSON.stringify(data);
    }
    const userData = getUserData();

    if (userData) {
        option.headers["X-Authorization"] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, option);
        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status == 204) {
            return response;
        } else {
            return await response.json()

        }

    } catch (err) {
        //TODO custom error handling
        alert(err.message)
        throw (err)
    }
}

export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);