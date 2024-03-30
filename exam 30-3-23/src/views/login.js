import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { login } from '../data/users.js';

const loginTemplate = (handler) => html`
 
`;

export async function showLogin() {

    const handler = createSubmitHandler(onSubmit);

    render(loginTemplate(handler));
};

async function onSubmit(data, form) {


    page.redirect('/');
}