import { html, page, render } from '../lib.js';

const homeTemplate = () => html`

`;

export async function showHome() {
    render(homeTemplate());
}