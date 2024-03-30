import { register } from '../data/users.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const registerTemplate = (handler) => html`

`;

export async function showRegister() {

    const handler = createSubmitHandler(onSubmit);

    render(registerTemplate(handler));
};

async function onSubmit(data, form) {


    page.redirect('/');

}