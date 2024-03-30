
export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))

}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
};

export function clearUserData() {
    localStorage.removeItem('user');

}

//TODO Add custom validation
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(data), event.target);
    }
}

export function updateNav() {

    const userData = getUserData();


    //TODO choose correct buttons
    const user = document.querySelector('nav .user');
    const guest = document.querySelector('nav .guest');

    if (!userData) {
        user.style.display = 'none';
        guest.style.display = 'block';
    } else {
        user.style.display = 'block';
        guest.style.display = 'none';
    }
}

export function parseQuery(query) {

    if (!query) {
        return {}
    }
    return Object.fromEntries(query
        .split('&')
        .map(prop => prop.split('=')))
}