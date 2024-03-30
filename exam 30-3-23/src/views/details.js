
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';


const detailsTemplate = () => html`
 
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;


    render(detailsTemplate());
}

